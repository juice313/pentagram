print("se da o lista")
list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17]
list2 = []
#  x = int(input("adaugati valoare lui x"))
for a in list:
    if a % 2 == 0:
        list2.append(a)
print (list2)