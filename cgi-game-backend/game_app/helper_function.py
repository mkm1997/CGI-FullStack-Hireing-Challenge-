import csv
from .models import Game

def read_csv_file():
    rows = []
    with open("/home/manish/PycharmProjects/CGI-Hack/game_listing/gamesc2b2088.csv", 'r') as csvfile:
        csvreader = csv.reader(csvfile)
        for row in csvreader:
            rows.append(row)
    count = 0
    for row in rows:
        if count >0:
            Game.objects.create(title = row[0], platform = row[1], score = row[2],genre = row[3], editor_choice = row[4])
        count = count+1
    return

