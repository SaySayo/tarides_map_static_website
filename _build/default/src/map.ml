open Leaflet
open Brr

type entry = { latitude : float; longitude : float; description : string }

let lagos =
  { latitude = 6.465422; longitude = 3.406448; description = "This is Lagos" }

let paris =
  { latitude = 48.864716; longitude = 2.349014; description = "This is Paris" }

let spain =
  { latitude = 39.466667; longitude = -0.375000; description = "This is Spain" }

let denmark =
  { latitude = 56.2639; longitude = 9.5018; description = "This is Denmark" }

let list_of_locations = [lagos; paris; spain; denmark]

let map =
  let map_id = (Document.find_el_by_id G.document) (Jstr.v "map") in
  match map_id with
  | Some map_id -> Map.create map_id
  | None -> Map.of_jv (Jv.of_error (Jv.Error.v (Jstr.v "Map ID not found")))

let () =
  let lat_lng = Latlng.create 51.505 (-0.09) in
  let zoom = Some 5 in
  Map.set_view lat_lng ~zoom map

(* Tile layer *)
let osm_layer =
  let url = Some "https://tile.openstreetmap.org/{z}/{x}/{y}.png" in
  Layer.create_tile_osm url

let () = Layer.add_to map osm_layer

let create_marker location =
  let latitude = location.latitude in
  let longitude = location.longitude in
  let popup_string = location.description in
  let marker =
    let lat_lng = Latlng.create latitude longitude in
    Layer.create_marker lat_lng
  in
  let () = Layer.add_to map marker in
  let str = El.txt' popup_string in
  let () = Layer.bind_popup str marker in
  Layer.open_popup marker

let () = List.iter create_marker list_of_locations

