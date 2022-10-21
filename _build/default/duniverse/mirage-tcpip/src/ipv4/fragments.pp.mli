Caml1999N031����   /         	-duniverse/mirage-tcpip/src/ipv4/fragments.mli����  #p  8  �  ������1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����"::�����������,library-name�@�@@����*tcpip_ipv4��.<command-line>A@A�A@K@@��A@@�A@L@@@@�@@�������@�@@@�@@�@@@@�@@@�@�������*ocaml.text���@@ ���@@ �A�������
  � IPv4 Fragmentation and reassembly

    An IPv4 packet may exceed the maximum transferable unit (MTU) of a link, and
   thus may be fragmented into multiple packets. Since the MTU depends on the
   underlying link, fragmentation and reassembly may happen in gateways as well
   as endpoints. Starting at byte 6, 16 bit in the IPv4 header are used for
   fragmentation. The first bit is reserved, the second signals if set to never
   fragment this packet - instead if it needs to be fragmented, an ICMP error
   must be returned (used for path MTU discovery). The third bit indicates
   whether this is the last fragment or more are following. The remaining 13
   bits are the offset of this fragment in the reassembled packet, divided by
   8. All fragments of one reassembled packet use the same 16 bit IPv4
   identifier (byte offset 4). The IPv4 header is repeated in each fragment,
   apart from those options which highest bit is cleared. Fragments may be
   received in any order.

    This module implements a reassembly cache, using a least recently used (LRU)
   cache underneath. For security reasons, only non-overlapping fragments are
   accepted. To avoid denial of service attacks, the maximum number of segments
   is limited to 16 - with a common MTU of 1500, this means that packets
   exceeding 24000 bytes will be dropped. The arrival time of the first and last
   fragment may not exceed 10 seconds. There is no per-source IP limit of
   fragment data to keep, only the total amount of fragmented data can be
   limited by the choice of the size of the LRU.

    Any received packet may be the last needed for a successful reassembly (due
   to receiving them out-of-order). When the last fragment (which has the more
   fragments bit cleared) for a quadruple source IP, destination IP, IP
   identifier, and protocol ID, is received, reassembly is attempted - also on
   subsequent packets with the same quadruple. ��	-duniverse/mirage-tcpip/src/ipv4/fragments.mliQ�n
�
�@@��Q�n
�
�@@@@��Q�n
�
�@@��
Q�n
�
�@��Q�n
�
�@������!V��p
�
��p
�
�@�����A�    �!t��#q
�
��$q
�
�@@@@A��������%int64��/q
�
��0q
�
�@@��2q
�
��3q
�
�@@@������'Cstruct!t��=q
�
��>q
�
�@@��@q
�
��Aq
�
�@@@�����$bool��Iq
�
��Jq
�
�@@��Lq
�
��Mq
�
�@@@�����#int��Uq
�
��Vq
�
�@@��Xq
�
��Yq
�
�@@@�����$list��aq
��bq
�@��������#int��mq
�
��nq
�
�@@��pq
�
��qq
�
�@@@������'Cstruct!t��{q
�
��|q
� @@��~q
�
��q
� @@@@���q
�
���q
� @@@@���q
�
���q
�@@@@���q
�
���q
�@@@���)ocaml.doc��F@@ ��G@@ �A�������
  $ The type of values in the fragment cache: a timestamp of the first
     received one, IP options (of the first fragment), whether or not the last
     fragment was received (the one with more fragments cleared), amount of
     received fragments, and a list of pairs of offset and fragment. ���r	��u�2@@���r	��u�2@@@@���r	��u�2@@���r	��u�2@@���q
�
���q
�@@���q
�
���q
�@���Р&weight���w4:��w4@@��@����!t���w4C��w4D@@���w4C��w4D@@@����#int���w4H��w4K@@���w4H��w4K@@@���w4C��w4K@@@@���E���@@ ���@@ �A�������	: [weight t] is the data length of the received fragments. ���xLN��xL�@@���xLN��xL�@@@@���xLN��xL�@@���xLN��xL�@@���w46��w4K@���w46��w4K@@���p
�
���y��@@@���p
�
���y��@���p
�
���y��@������!K���{��� {��@�����A�    �!t��|���|��@@@@A����������&Ipaddr"V4!t��|���|��@@��|���|��@@@�������&Ipaddr"V4!t��+|���,|��@@��.|���/|��@@@�����#int��7|���8|��@@��:|���;|��@@@�����#int��C|���D|��@@��F|���G|��@@@@��I|���J|��@@@���°�@@ ��@@ �A�������	| The type of keys in the fragment cache: source IP address, destination
      IP address, protocol type, and IP identifier. ��Z}���[~ V@@��]}���^~ V@@@@��`}���a~ V@@��c}���d~ V@@��f|���g|��@@��i|���j|��@���Р'compare��r @X^�s @Xe@��@����!t��| @Xh�} @Xi@@�� @Xh�� @Xi@@@��@����!t��� @Xm�� @Xn@@��� @Xm�� @Xn@@@����#int��� @Xr�� @Xu@@��� @Xr�� @Xu@@@��� @Xm�� @Xu@@@��� @Xh�� @Xu@@@@@��� @XZ�� @Xu@��� @XZ�� @Xu@@���{���� Avy@@@���{���� Avy@���{���� Avy@������%Cache��� C{��� C{�@��������������#Lru!F!S��� D���� D��@��� D���� D��@@����!k��� D���� D��@    ���� D���� D��@@@@A������!K!t��� D���� D��@@��� D���� D��@@@@��� D���� D��@����!v��� D���� D��@    ���� D���� D��@@@@A������!V!t�� D��� D��@@�� D��� D��@@@@��	 D���
 D��@@�� D��� D��@@�� D��� D��@@�� D��� D��@@�� C{�� E��@@@�� C{{� E��@�� C{{� E��@���Р,max_duration��$ G���% G��@����%int64��, G���- G��@@��/ G���0 G��@@@@�������@@ ���@@ �A�������	� [max_duration] is the maximum delta between first and last received
    fragment, in nanoseconds. At the moment it is 10 seconds. ��@ H���A I)i@@��C H���D I)i@@@@��F H���G I)i@@��I H���J I)i@@��L G���M G��@��O G���P G��@���Р'process��X Kko�Y Kkv@��@�����%Cache!t��d Kky�e Kk�@@��g Kky�h Kk�@@@��@����%int64��q Kk��r Kk�@@��t Kk��u Kk�@@@��@�����+Ipv4_packet!t��� Kk��� Kk�@@��� Kk��� Kk�@@@��@�����'Cstruct!t��� Kk��� Kk�@@��� Kk��� Kk�@@@��������%Cache!t��� Kk��� Kk�@@��� Kk��� Kk�@@@�����&option��� L���� L��@���������+Ipv4_packet!t��� L���� L��@@��� L���� L��@@@������'Cstruct!t��� L���� L��@@��� L���� L��@@@@��� L���� L��@@@@��� L���� L��@@@@��� Kk��� L��@@@��� Kk��� L��@@@��� Kk��� L��@@@��� Kk��� L��@@@��� Kky�� L��@@@@���X���@@ ���@@ �A�������
  X [process t timestamp hdr payload] is
   [t'], a new cache, and maybe a fully reassembled IPv4 packet. If reassembly
   fails, e.g. too many fragments, delta between receive timestamp of first and
   last packet exceeds {!max_duration}, overlapping packets, these packets
   will be dropped from the cache. The IPv4 header options are always taken from
   the first fragment (where offset is 0). If the provided IPv4 header has an
   fragmentation offset of 0, and the more fragments bit is not set, the given
   header and payload is directly returned. Handles out-of-order fragments
   gracefully. ��� L���� T'8@@��� L���� T'8@@@@��� L���� T'8@@��� L���� T'8@@��� Kkk�� L��@��� Kkk�  L��@���Р(fragment�� V:>�	 V:F@���#mtu����#int�� V:M� V:P@@�� V:M� V:P@@@��@�����+Ipv4_packet!t��# V:T�$ V:a@@��& V:T�' V:a@@@��@�����'Cstruct!t��2 V:e�3 V:n@@��5 V:e�6 V:n@@@����$list��= V:|�> V:�@������'Cstruct!t��H V:r�I V:{@@��K V:r�L V:{@@@@��N V:r�O V:�@@@��Q V:e�R V:�@@@��T V:T�U V:�@@@��W V:I�X V:�@@@@���а�@@ ��@@ �A�������
  � [fragment ~mtu hdr payload] is called with the IPv4 header of the first
    fragment and the remaining payload (which did not fit into the first
    fragment). The [data_length = ((mtu - header_length hdr) / 8) * 8] is used
    for each fragment (and it is assumed that the first fragment contains
    exactly that much data). The number of packets returned is
    [len payload / data_len]. If [data_len <= 0], the empty list is returned. ��h W���i \�>@@��k W���l \�>@@@@��n W���o \�>@@��q W���r \�>@@��t V::�u V:�@��w V::�x V:�@@