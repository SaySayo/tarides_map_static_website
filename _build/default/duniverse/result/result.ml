# 1 "duniverse/result/result-as-alias-4.08.ml"
include Stdlib.Result
type ('a, 'b) result = ('a, 'b) Stdlib.Result.t = Ok of 'a | Error of 'b
