def isACorner(i, j, n)
    return (j == 1 || j == n) && (i == 1 || i == n)
end

def isInside(i, j, n)
    return (j > 1 && j < n) && (i > 1 && i < n)
end


$n = 4
$N = n + 2

for i in 1..(N + 1) do 

    row = ''

    for j in 1..(N + 1) do 
        if def isACorner(i, j, N)
          row += ' '
        else
          row += def isInside(i, j, N) ? ' ' :  '*'
        end
    

    puts row
