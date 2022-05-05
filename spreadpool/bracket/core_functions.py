"""
Core functions are those that are universal and used by various other functions libraries
"""

def getFriendlyDate(storedDate):
	# Convert the stored tipoff_date_time to a front-end friendly date

	friendlyDate = '{dt.month}/{dt.day} ({dt:%a})'.format(dt=storedDate)

	return friendlyDate

def getFriendlyTime(storedDate):
	# Convert the stored tipoff_date_time to a front-end friendly time

	friendlyTime = '{dt:%I}:{dt:%M} {dt:%p}'.format(dt=storedDate)

	return friendlyTime