(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     lagos=[0,6.465422,3.406448,caml_string_of_jsbytes("This is Lagos")],
     paris=[0,48.864716,2.349014,caml_string_of_jsbytes("This is Paris")],
     spain=[0,39.466667,-0.375,caml_string_of_jsbytes("This is Spain")],
     denmark=[0,56.2639,9.5018,caml_string_of_jsbytes("This is Denmark")],
     zoom=[0,5],
     url=
      [0,
       caml_string_of_jsbytes
        ("https://tile.openstreetmap.org/{z}/{x}/{y}.png")],
     Leaflet_Latlng=global_data.Leaflet__Latlng,
     Leaflet_Layer=global_data.Leaflet__Layer,
     Brr=global_data.Brr,
     Leaflet_Map=global_data.Leaflet__Map,
     Jv=global_data.Jv,
     Stdlib_List=global_data.Stdlib__List,
     list_of_locations=[0,lagos,[0,paris,[0,spain,[0,denmark,0]]]],
     map_id=caml_call1(caml_call1(Brr[10][2],Brr[16][2]),"map");
    if(map_id)
     var map_id$0=map_id[1],_a_=caml_call2(Leaflet_Map[1],0,map_id$0);
    else
     var
      _b_=caml_call2(Jv[30][1],0,"Map ID not found"),
      _a_=caml_call1(Leaflet_Map[10],_b_);
    var lat_lng=caml_call2(Leaflet_Latlng[1],51.505,-0.09);
    caml_call3(Leaflet_Map[3],lat_lng,zoom,_a_);
    var osm_layer=caml_call1(Leaflet_Layer[12],url);
    caml_call2(Leaflet_Layer[1],_a_,osm_layer);
    function create_marker(location)
     {var
       latitude=location[1],
       longitude=location[2],
       popup_string=location[3],
       lat_lng=caml_call2(Leaflet_Latlng[1],latitude,longitude),
       marker=caml_call1(Leaflet_Layer[11],lat_lng);
      caml_call2(Leaflet_Layer[1],_a_,marker);
      var str=caml_call2(Brr[9][3],0,popup_string);
      caml_call2(Leaflet_Layer[4],str,marker);
      return caml_call1(Leaflet_Layer[6],marker)}
    caml_call2(Stdlib_List[17],create_marker,list_of_locations);
    var
     Dune_exe_Map=
      [0,
       lagos,
       paris,
       spain,
       denmark,
       list_of_locations,
       _a_,
       osm_layer,
       create_marker];
    runtime.caml_register_global(16,Dune_exe_Map,"Dune__exe__Map");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFwLmVvYmpzL2J5dGUvZHVuZV9fZXhlX19NYXAuY21vLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbImxhZ29zIiwicGFyaXMiLCJzcGFpbiIsImRlbm1hcmsiLCJ6b29tIiwidXJsIiwibGlzdF9vZl9sb2NhdGlvbnMiLCJtYXBfaWQiLCJtYXBfaWQkMCIsImxhdF9sbmciLCJvc21fbGF5ZXIiLCJjcmVhdGVfbWFya2VyIiwibG9jYXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInBvcHVwX3N0cmluZyIsIm1hcmtlciIsInN0ciJdLCJzb3VyY2VzIjpbIi9Vc2Vycy9idXNheW9iYW1pZ2JhZGUvU2l0ZXMvc3RhdGljX3dlYnNpdGVfdGxzL19idWlsZC9kZWZhdWx0L3NyYy9tYXAubWwiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7OztJQW9Ca0Q7O0tBZjlDQTtLQUdBQztLQUdBQztLQUdBQztLQWFFQztLQUtBQzs7Ozs7Ozs7OztLQWZGQyxxQkFaQU4sU0FHQUMsU0FHQUMsU0FHQUM7S0FNOEMsa0JBQW5DO0lBQW1DLEdBQTVDSTtLQUVhLGFBRmJBLGNBRWEsNEJBQVZDOztLQUMwQjs7VUFBdkI7SUFIc0MsSUFNNUNDLFFBQVU7SUFFZCwwQkFGSUEsUUFDQUw7SUFQNEMsSUFXOUNNLFVBRUYsNkJBRElMO0lBR0csZ0NBSkxLO0lBSUssU0FFTEMsY0FBY0M7TUFDaEI7Z0JBRGdCQTtPQUNoQixVQURnQkE7T0FDaEIsYUFEZ0JBO09BS0EscUNBSlpDLFNBQ0FDO09BSUYsb0NBRElMO01BR0csZ0NBSkxPO01BSEosSUFRSUMsSUFBTSx1QkFOTkY7TUFPSyw0QkFETEUsSUFMQUQ7TUFNSyxtQ0FOTEEsT0FPbUI7SUFFaEIsMkJBYkxMLGNBcEJBTDtJQWlDSzs7O09BN0NMTjtPQUdBQztPQUdBQztPQUdBQztPQUdBRzs7T0FjQUk7T0FNQUM7SUFhSztVIiwic291cmNlc0NvbnRlbnQiOlsib3BlbiBMZWFmbGV0XG5vcGVuIEJyclxuXG50eXBlIGVudHJ5ID0geyBsYXRpdHVkZSA6IGZsb2F0OyBsb25naXR1ZGUgOiBmbG9hdDsgZGVzY3JpcHRpb24gOiBzdHJpbmcgfVxuXG5sZXQgbGFnb3MgPVxuICB7IGxhdGl0dWRlID0gNi40NjU0MjI7IGxvbmdpdHVkZSA9IDMuNDA2NDQ4OyBkZXNjcmlwdGlvbiA9IFwiVGhpcyBpcyBMYWdvc1wiIH1cblxubGV0IHBhcmlzID1cbiAgeyBsYXRpdHVkZSA9IDQ4Ljg2NDcxNjsgbG9uZ2l0dWRlID0gMi4zNDkwMTQ7IGRlc2NyaXB0aW9uID0gXCJUaGlzIGlzIFBhcmlzXCIgfVxuXG5sZXQgc3BhaW4gPVxuICB7IGxhdGl0dWRlID0gMzkuNDY2NjY3OyBsb25naXR1ZGUgPSAtMC4zNzUwMDA7IGRlc2NyaXB0aW9uID0gXCJUaGlzIGlzIFNwYWluXCIgfVxuXG5sZXQgZGVubWFyayA9XG4gIHsgbGF0aXR1ZGUgPSA1Ni4yNjM5OyBsb25naXR1ZGUgPSA5LjUwMTg7IGRlc2NyaXB0aW9uID0gXCJUaGlzIGlzIERlbm1hcmtcIiB9XG5cbmxldCBsaXN0X29mX2xvY2F0aW9ucyA9IFtsYWdvczsgcGFyaXM7IHNwYWluOyBkZW5tYXJrXVxuXG5sZXQgbWFwID1cbiAgbGV0IG1hcF9pZCA9IChEb2N1bWVudC5maW5kX2VsX2J5X2lkIEcuZG9jdW1lbnQpIChKc3RyLnYgXCJtYXBcIikgaW5cbiAgbWF0Y2ggbWFwX2lkIHdpdGhcbiAgfCBTb21lIG1hcF9pZCAtPiBNYXAuY3JlYXRlIG1hcF9pZFxuICB8IE5vbmUgLT4gTWFwLm9mX2p2IChKdi5vZl9lcnJvciAoSnYuRXJyb3IudiAoSnN0ci52IFwiTWFwIElEIG5vdCBmb3VuZFwiKSkpXG5cbmxldCAoKSA9XG4gIGxldCBsYXRfbG5nID0gTGF0bG5nLmNyZWF0ZSA1MS41MDUgKC0wLjA5KSBpblxuICBsZXQgem9vbSA9IFNvbWUgNSBpblxuICBNYXAuc2V0X3ZpZXcgbGF0X2xuZyB+em9vbSBtYXBcblxuKCogVGlsZSBsYXllciAqKVxubGV0IG9zbV9sYXllciA9XG4gIGxldCB1cmwgPSBTb21lIFwiaHR0cHM6Ly90aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiIGluXG4gIExheWVyLmNyZWF0ZV90aWxlX29zbSB1cmxcblxubGV0ICgpID0gTGF5ZXIuYWRkX3RvIG1hcCBvc21fbGF5ZXJcblxubGV0IGNyZWF0ZV9tYXJrZXIgbG9jYXRpb24gPVxuICBsZXQgbGF0aXR1ZGUgPSBsb2NhdGlvbi5sYXRpdHVkZSBpblxuICBsZXQgbG9uZ2l0dWRlID0gbG9jYXRpb24ubG9uZ2l0dWRlIGluXG4gIGxldCBwb3B1cF9zdHJpbmcgPSBsb2NhdGlvbi5kZXNjcmlwdGlvbiBpblxuICBsZXQgbWFya2VyID1cbiAgICBsZXQgbGF0X2xuZyA9IExhdGxuZy5jcmVhdGUgbGF0aXR1ZGUgbG9uZ2l0dWRlIGluXG4gICAgTGF5ZXIuY3JlYXRlX21hcmtlciBsYXRfbG5nXG4gIGluXG4gIGxldCAoKSA9IExheWVyLmFkZF90byBtYXAgbWFya2VyIGluXG4gIGxldCBzdHIgPSBFbC50eHQnIHBvcHVwX3N0cmluZyBpblxuICBsZXQgKCkgPSBMYXllci5iaW5kX3BvcHVwIHN0ciBtYXJrZXIgaW5cbiAgTGF5ZXIub3Blbl9wb3B1cCBtYXJrZXJcblxubGV0ICgpID0gTGlzdC5pdGVyIGNyZWF0ZV9tYXJrZXIgbGlzdF9vZl9sb2NhdGlvbnNcblxuIl19
