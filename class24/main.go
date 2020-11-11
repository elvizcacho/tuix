package main
import "fmt"


func isACorner(i int, j int, n int) bool {
    return (j == 1 || j == n) && (i == 1 || i == n)
}

func isInside(i int, j int, n int) bool {
    return (j > 1 && j < n) && (i > 1 && i < n)
}

func main() {

    var n = 4
    var N = n + 2

    for i := 1; i <= N; i++ {

        var row = ""

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
                }
            }
        }

        fmt.Println(row)
    }

}
