# 1 "common_401.cppo.ml"
external swap16 : int -> int = "%bswap16"
external swap32 : int32 -> int32 = "%bswap_int32"
external swap64 : int64 -> int64 = "%bswap_int64"
external swapnative : nativeint -> nativeint = "%bswap_native"

module BigEndian = struct

  let get_char = get_char
  let get_uint8 = get_uint8
  let get_int8 = get_int8
  let set_char = set_char
  let set_int8 = set_int8

  
# 1 "be_ocaml_401.ml"
  let get_uint16 s off =
    if not Sys.big_endian
    then swap16 (get_16 s off)
    else get_16 s off
  [@@ocaml.inline]

  let get_int16 s off =
   ((get_uint16 s off) lsl ( Sys.int_size - 16 )) asr ( Sys.int_size - 16 )
  [@@ocaml.inline]

  let get_int32 s off =
    if not Sys.big_endian
    then swap32 (get_32 s off)
    else get_32 s off
  [@@ocaml.inline]

  let get_int64 s off =
    if not Sys.big_endian
    then swap64 (get_64 s off)
    else get_64 s off
  [@@ocaml.inline]

  let set_int16 s off v =
    if not Sys.big_endian
    then (set_16 s off (swap16 v))
    else set_16 s off v
  [@@ocaml.inline]

  let set_int32 s off v =
    if not Sys.big_endian
    then set_32 s off (swap32 v)
    else set_32 s off v
  [@@ocaml.inline]

  let set_int64 s off v =
    if not Sys.big_endian
    then set_64 s off (swap64 v)
    else set_64 s off v
  [@@ocaml.inline]

# 2 "common_float.ml"
let get_float buff i = Int32.float_of_bits (get_int32 buff i) [@@ocaml.inline]
let get_double buff i = Int64.float_of_bits (get_int64 buff i) [@@ocaml.inline]
let set_float buff i v = set_int32 buff i (Int32.bits_of_float v) [@@ocaml.inline]
let set_double buff i v = set_int64 buff i (Int64.bits_of_float v) [@@ocaml.inline]

# 17 "common_401.cppo.ml"
end

module BigEndian_unsafe = struct

  let get_char = unsafe_get_char
  let get_uint8 = unsafe_get_uint8
  let get_int8 = unsafe_get_int8
  let set_char = unsafe_set_char
  let set_int8 = unsafe_set_int8
  let get_16 = unsafe_get_16
  let get_32 = unsafe_get_32
  let get_64 = unsafe_get_64
  let set_16 = unsafe_set_16
  let set_32 = unsafe_set_32
  let set_64 = unsafe_set_64

  
# 1 "be_ocaml_401.ml"
  let get_uint16 s off =
    if not Sys.big_endian
    then swap16 (get_16 s off)
    else get_16 s off
  [@@ocaml.inline]

  let get_int16 s off =
   ((get_uint16 s off) lsl ( Sys.int_size - 16 )) asr ( Sys.int_size - 16 )
  [@@ocaml.inline]

  let get_int32 s off =
    if not Sys.big_endian
    then swap32 (get_32 s off)
    else get_32 s off
  [@@ocaml.inline]

  let get_int64 s off =
    if not Sys.big_endian
    then swap64 (get_64 s off)
    else get_64 s off
  [@@ocaml.inline]

  let set_int16 s off v =
    if not Sys.big_endian
    then (set_16 s off (swap16 v))
    else set_16 s off v
  [@@ocaml.inline]

  let set_int32 s off v =
    if not Sys.big_endian
    then set_32 s off (swap32 v)
    else set_32 s off v
  [@@ocaml.inline]

  let set_int64 s off v =
    if not Sys.big_endian
    then set_64 s off (swap64 v)
    else set_64 s off v
  [@@ocaml.inline]

# 2 "common_float.ml"
let get_float buff i = Int32.float_of_bits (get_int32 buff i) [@@ocaml.inline]
let get_double buff i = Int64.float_of_bits (get_int64 buff i) [@@ocaml.inline]
let set_float buff i v = set_int32 buff i (Int32.bits_of_float v) [@@ocaml.inline]
let set_double buff i v = set_int64 buff i (Int64.bits_of_float v) [@@ocaml.inline]

# 36 "common_401.cppo.ml"
end

module LittleEndian = struct

  let get_char = get_char
  let get_uint8 = get_uint8
  let get_int8 = get_int8
  let set_char = set_char
  let set_int8 = set_int8

  
# 1 "le_ocaml_401.ml"
  let get_uint16 s off =
    if Sys.big_endian
    then swap16 (get_16 s off)
    else get_16 s off
  [@@ocaml.inline]

  let get_int16 s off =
   ((get_uint16 s off) lsl ( Sys.int_size - 16 )) asr ( Sys.int_size - 16 )
  [@@ocaml.inline]

  let get_int32 s off =
    if Sys.big_endian
    then swap32 (get_32 s off)
    else get_32 s off
  [@@ocaml.inline]

  let get_int64 s off =
    if Sys.big_endian
    then swap64 (get_64 s off)
    else get_64 s off
  [@@ocaml.inline]

  let set_int16 s off v =
    if Sys.big_endian
    then (set_16 s off (swap16 v))
    else set_16 s off v
  [@@ocaml.inline]

  let set_int32 s off v =
    if Sys.big_endian
    then set_32 s off (swap32 v)
    else set_32 s off v
  [@@ocaml.inline]

  let set_int64 s off v =
    if Sys.big_endian
    then set_64 s off (swap64 v)
    else set_64 s off v
  [@@ocaml.inline]

# 2 "common_float.ml"
let get_float buff i = Int32.float_of_bits (get_int32 buff i) [@@ocaml.inline]
let get_double buff i = Int64.float_of_bits (get_int64 buff i) [@@ocaml.inline]
let set_float buff i v = set_int32 buff i (Int32.bits_of_float v) [@@ocaml.inline]
let set_double buff i v = set_int64 buff i (Int64.bits_of_float v) [@@ocaml.inline]

# 49 "common_401.cppo.ml"
end

module LittleEndian_unsafe = struct

  let get_char = unsafe_get_char
  let get_uint8 = unsafe_get_uint8
  let get_int8 = unsafe_get_int8
  let set_char = unsafe_set_char
  let set_int8 = unsafe_set_int8
  let get_16 = unsafe_get_16
  let get_32 = unsafe_get_32
  let get_64 = unsafe_get_64
  let set_16 = unsafe_set_16
  let set_32 = unsafe_set_32
  let set_64 = unsafe_set_64

  
# 1 "le_ocaml_401.ml"
  let get_uint16 s off =
    if Sys.big_endian
    then swap16 (get_16 s off)
    else get_16 s off
  [@@ocaml.inline]

  let get_int16 s off =
   ((get_uint16 s off) lsl ( Sys.int_size - 16 )) asr ( Sys.int_size - 16 )
  [@@ocaml.inline]

  let get_int32 s off =
    if Sys.big_endian
    then swap32 (get_32 s off)
    else get_32 s off
  [@@ocaml.inline]

  let get_int64 s off =
    if Sys.big_endian
    then swap64 (get_64 s off)
    else get_64 s off
  [@@ocaml.inline]

  let set_int16 s off v =
    if Sys.big_endian
    then (set_16 s off (swap16 v))
    else set_16 s off v
  [@@ocaml.inline]

  let set_int32 s off v =
    if Sys.big_endian
    then set_32 s off (swap32 v)
    else set_32 s off v
  [@@ocaml.inline]

  let set_int64 s off v =
    if Sys.big_endian
    then set_64 s off (swap64 v)
    else set_64 s off v
  [@@ocaml.inline]

# 2 "common_float.ml"
let get_float buff i = Int32.float_of_bits (get_int32 buff i) [@@ocaml.inline]
let get_double buff i = Int64.float_of_bits (get_int64 buff i) [@@ocaml.inline]
let set_float buff i v = set_int32 buff i (Int32.bits_of_float v) [@@ocaml.inline]
let set_double buff i v = set_int64 buff i (Int64.bits_of_float v) [@@ocaml.inline]

# 68 "common_401.cppo.ml"
end

module NativeEndian = struct

  let get_char = get_char
  let get_uint8 = get_uint8
  let get_int8 = get_int8
  let set_char = set_char
  let set_int8 = set_int8

  
# 1 "ne_ocaml_401.ml"
  let get_uint16 s off =
    get_16 s off
  [@@ocaml.inline]

  let get_int16 s off =
   ((get_uint16 s off) lsl ( Sys.int_size - 16 )) asr ( Sys.int_size - 16 )
  [@@ocaml.inline]

  let get_int32 s off =
    get_32 s off
  [@@ocaml.inline]

  let get_int64 s off =
    get_64 s off
  [@@ocaml.inline]

  let set_int16 s off v =
    set_16 s off v
  [@@ocaml.inline]

  let set_int32 s off v =
    set_32 s off v
  [@@ocaml.inline]

  let set_int64 s off v =
    set_64 s off v
  [@@ocaml.inline]

# 2 "common_float.ml"
let get_float buff i = Int32.float_of_bits (get_int32 buff i) [@@ocaml.inline]
let get_double buff i = Int64.float_of_bits (get_int64 buff i) [@@ocaml.inline]
let set_float buff i v = set_int32 buff i (Int32.bits_of_float v) [@@ocaml.inline]
let set_double buff i v = set_int64 buff i (Int64.bits_of_float v) [@@ocaml.inline]

# 81 "common_401.cppo.ml"
end

module NativeEndian_unsafe = struct

  let get_char = unsafe_get_char
  let get_uint8 = unsafe_get_uint8
  let get_int8 = unsafe_get_int8
  let set_char = unsafe_set_char
  let set_int8 = unsafe_set_int8
  let get_16 = unsafe_get_16
  let get_32 = unsafe_get_32
  let get_64 = unsafe_get_64
  let set_16 = unsafe_set_16
  let set_32 = unsafe_set_32
  let set_64 = unsafe_set_64

  
# 1 "ne_ocaml_401.ml"
  let get_uint16 s off =
    get_16 s off
  [@@ocaml.inline]

  let get_int16 s off =
   ((get_uint16 s off) lsl ( Sys.int_size - 16 )) asr ( Sys.int_size - 16 )
  [@@ocaml.inline]

  let get_int32 s off =
    get_32 s off
  [@@ocaml.inline]

  let get_int64 s off =
    get_64 s off
  [@@ocaml.inline]

  let set_int16 s off v =
    set_16 s off v
  [@@ocaml.inline]

  let set_int32 s off v =
    set_32 s off v
  [@@ocaml.inline]

  let set_int64 s off v =
    set_64 s off v
  [@@ocaml.inline]

# 2 "common_float.ml"
let get_float buff i = Int32.float_of_bits (get_int32 buff i) [@@ocaml.inline]
let get_double buff i = Int64.float_of_bits (get_int64 buff i) [@@ocaml.inline]
let set_float buff i v = set_int32 buff i (Int32.bits_of_float v) [@@ocaml.inline]
let set_double buff i v = set_int64 buff i (Int64.bits_of_float v) [@@ocaml.inline]

# 100 "common_401.cppo.ml"
end
