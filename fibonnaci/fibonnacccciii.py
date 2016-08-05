print ("hi")
print ("this cool thing will do a fibonnacci for you , you just have to enter the last digit")
x = int(input("introdu numarul"))
sir = [1 , 1]
for a in range(1,x-1):
    sir.append(sir[a]+sir[a-1])
print (sir)


