
module Array = Array0

module Repr = struct
  type t =
    { st : int array
    ; mutable idx : int
    }

  let of_state : Caml.Random.State.t -> t = Caml.Obj.magic
end

let assign t1 t2 =
  let t1 = Repr.of_state (Lazy.force t1) in
  let t2 = Repr.of_state (Lazy.force t2) in
  Array.blit ~src:t2.st ~src_pos:0 ~dst:t1.st ~dst_pos:0 ~len:(Array.length t1.st);
  t1.idx <- t2.idx

let make_default default = default

let[@inline always] get_state state = state
