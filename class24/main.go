package main
import "fmt"


func isACorner(i int, j int, n int) bool {
    return (j == 1 || j == n) && (i == 1 || i == n)
}

func isInside(i int, j int, n int) bool {
    return (j > 1 && j < n) && (i > 1 && i < n)
}

func main() {
<<<<<<< HEAD
    var n = 4

    var isACorner = func (i int, j int, n int) bool{
        return (j == 1 || j == n) && (i == 1 || i == n)
    }

    var isInside = func (i int, j int, n int) bool{
        return (j > 1 && j < n) && (i > 1 && i < n)
    }
=======

    var n = 4
    var N = n + 2

    for i := 1; i <= N; i++ {
>>>>>>> 5e7e3119bbd48a9bda15d5a5fa355f05183b5381

        var row = ""

<<<<<<< HEAD
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
=======
        for j := 1; j <= N; j++ {

            var isAC = isACorner(i, j, N)

            if isAC {
                row += " "
            } else {
                var isI = isInside(i, j, N)
                if isI {
                    row += " "
                } else {
                    row += "*"
>>>>>>> 5e7e3119bbd48a9bda15d5a5fa355f05183b5381
                }
            }
        }

        fmt.Println(row)
    }

}
