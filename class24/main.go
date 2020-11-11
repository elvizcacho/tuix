package main
import "fmt"

func main() {
    var n = 4

    var isACorner = func (i int, j int, n int) bool{
        return (j == 1 || j == n) && (i == 1 || i == n)
    }

    var isInside = func (i int, j int, n int) bool{
        return (j > 1 && j < n) && (i > 1 && i < n)
    }

    func () {
        for i := 1; i <= n; i++ {

            var row = ""
        
            for j := 1; j <= n; j++ {
                if isACorner(n, i, j) {
                row += ' '
                } else {
                    if isInside(i, j, n) {
                        row += " "
                    } else {
                        row += "*"
                    }
                }
            }
    }
    
    fmt.Println(row)
}