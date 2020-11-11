package main
import "fmt"

func main() {
    const n = 4

    const isACorner = func (i, j, n ) {
        return (j == 1 || j == n) && (i == 1 || i == n)
    }

    const isInside = func (i, j, n) {
        return (j > 1 && j < n) && (i > 1 && i < n)
    }

    func () {
        for i := 1; i <= n; i++ {

            var row = ''
        
            for j := 1; j <= n; j++ {
                if isACorner(n, i, j) {
                row += ' '
                } else {
                    if isInside(i, j, n) {
                        row += ' '
                    } else {
                        row += '*'
                    }
                }
            }
    }
    
    fmt.Println(row)
}