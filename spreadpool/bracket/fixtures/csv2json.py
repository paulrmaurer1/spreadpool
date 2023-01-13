# csv2json.py
# 
# Copyright 2009 Brian Gershon -- briang at webcollective.coop
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
#     http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# For spreadpool\bracket app, to populate teams for example, type:
# csv2json <filename> <bracket.model>, e.g. csv2json team_setup.csv bracket.Team
# from within spreadpool\bracket\fixtures\ directory.
# Then enter command: python manage.py loaddata <JSON file>, e.g. python manage.py loaddata Sample1.json
# from project directory, C:\DjangoProjects\spreadpool_project\spreadpool

import sys
import getopt
import csv
import json
import os
import pathlib

try:
    script, input_file_name, model_name = sys.argv
except ValueError:
    print ("\nRun via:\n\n{} input_file_name model_name".format(sys.argv[0]))
    print ("\ne.g. {} airport.csv app_airport.Airport".format(sys.argv[0]))
    print ("\nNote: input_file_name should be a path relative to where this script is.")
    sys.exit()

# For directory of script being run:
# pathlib.Path(__file__).parent.resolve()

path_name = pathlib.Path().resolve()
# print ("The input filename about to be used is: ", os.path.join(path, input_file_name))

in_file = os.path.join(path_name, input_file_name)
out_file = os.path.join(path_name, input_file_name.rsplit( ".", 1 )[ 0 ] + ".json")

print ("Converting {} from CSV to JSON as {}".format(in_file, out_file))

f = open(in_file, 'r' )
fo = open(out_file, 'w')

reader = csv.reader( f )

header_row = []
entries = []

# debugging
# if model_name == 'app_airport.Airport':
#     import pdb ; pdb.set_trace( )

for row in reader:
    if not header_row:
        header_row = row
        continue
        
    pk = row[0]
    model = model_name
    fields = {}
    for i in range(len(row)-1):
        active_field = row[i+1]

        # convert numeric strings into actual numbers by converting to either int or float
        if not active_field:
            continue
        elif active_field.isdigit():
            try:
                new_number = int(active_field)
            except ValueError:
                new_number = float(active_field)
            fields[header_row[i+1]] = new_number
        else:
            fields[header_row[i+1]] = active_field.strip()
        
    row_dict = {}
    row_dict["pk"] = int(pk)
    row_dict["model"] = model_name
    
    row_dict["fields"] = fields
    entries.append(row_dict)

fo.write("%s" % json.dumps(entries, indent=4))

f.close()
fo.close()