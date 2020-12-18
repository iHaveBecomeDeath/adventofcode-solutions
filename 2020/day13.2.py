inputBuses = '37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,587,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,19,x,x,x,23,x,x,x,x,x,29,x,733,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17'

buses = [{'line': int(x), 'distance': i} for i, x in enumerate(inputBuses.split(',')) if x != 'x']
# after a full day of brute force-looping I looked into some smarter ways to solve this

i, step = 0, 1
for bus in buses:
    while (i + bus['distance']) % bus['line'] != 0:
        i += step
    step *= bus['line']

print('the resulting timestamp is: ', i)

#i = 100000000
#found = False

# while True:
#     foundBusCount = 0
#     for bus in buses:
#         # print('i + distance', i + bus['distance'], 'line', bus['line'], ' mod line ', (i + bus['distance']) % bus['line'])
#         if ((i + bus['distance']) % bus['line'] == 0):
#             # print('found something', bus, 'at', i)
#             foundBusCount+=1
        
#     if (foundBusCount == len(buses)-1):
#         break
#     else:
#         i += buses[0]['line']
#         if (i % 10000000 == 0):
#             print(i)
    
# print(i)
