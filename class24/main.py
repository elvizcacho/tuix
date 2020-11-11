n = 4

def isacorner(i, j, n):
    return (j == 1 or j == n) and (i == 1 or i == n)


def isinside(i, j, n) :
    return (j > 1 and j < n) and (i > 1 and i < n)


for i in range (1) : 
  if i <= n : 

    row = ''

    for j in range (1) :
      if j <= n :
        if isacorner(n, i, j) :
          row += ' '

          break
        else :
          row += isinside(i, j, n) if ' ' else '*'
        
      break

print(row)