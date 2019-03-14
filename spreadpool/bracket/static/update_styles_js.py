from sys import argv
import fileinput
import re
from shutil import copyfile

script, filename = argv

print ("This script will modify {}".format(filename))
print ("to update broken url paths for Angular builds.")
print ("If you don't want that, hit CTRL-C (^C).")
print ("If you do want that, hit RETURN.")

input("?")

badLinks = (
	"url('fontawesome-webfont.woff2?v=4.7.0')",
	"url('fontawesome-webfont.woff?v=4.7.0')",
	"url('fontawesome-webfont.ttf?v=4.7.0')",
	"url('primeicons.ttf')",
	"url('primeicons.woff')",
	"url('open-sans-v15-latin-regular.woff2')",
	"url('open-sans-v15-latin-regular.woff')"
	)
goodLinks = (
	"url('../static/front-end/fontawesome-webfont.woff2')",
	"url('../static/front-end/fontawesome-webfont.woff')",
	"url('../static/front-end/fontawesome-webfont.ttf')",
	"url('../static/front-end/primeicons.ttf')",
	"url('../static/front-end/primeicons.woff')",
	"url('../static/front-end/open-sans-v15-latin-regular.woff2')",
	"url('../static/front-end/open-sans-v15-latin-regular.woff')"
	)

line_num=0
num_changes=0

print ("Creating backup of file -> {}".format(filename + '.bak'))
copyfile(filename, filename + '.bak')

print ("Opening the file...")

with open(filename, encoding="utf8") as file:
	filedata = file.read()

for check, rep in zip(badLinks, goodLinks):
	if check in filedata:
		num_changes += 1
		filedata = filedata.replace(check, rep)

with open(filename, 'w', encoding="utf8") as file:
	file.write(filedata)
file.close()

print ("Finished processing the file; made {} replacements".format(str(num_changes)))

# with fileinput.FileInput(filename, inplace=True, backup='.bak') as file:
# 	for line in file:
# 		line_num += 1
# 		for check, rep in zip(badLinks, goodLinks):
# 			if check in line:
# 				line=line.replace(check,rep)
# 				num_changes += 1
# 		print(line, end='')

# print ("Finished processing the file; made {} replacements".format(str(num_changes)))