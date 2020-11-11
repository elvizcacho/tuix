n = 4
N = n + 2

def isacorner(i, j, n):
  return (j == 1 or j == n) and (i == 1 or i == n)


def isinside(i, j, n):
  return (j > 1 and j < n) and (i > 1 and i < n)

for i in range(1, N + 1):
  row = ''

  for j in range (1, N + 1):
    if isacorner(i, j, N):
      row += ' '
    else:
      row += ' ' if isinside(i, j, N) else '*'

  print(row)
