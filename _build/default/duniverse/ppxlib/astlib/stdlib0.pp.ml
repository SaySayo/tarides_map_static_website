# 1 "duniverse/ppxlib/astlib/stdlib0.ml"
module Int = struct
  let to_string = string_of_int
end

module Option = struct
  let map f o = match o with None -> None | Some v -> Some (f v)
end
