#!/bin/sh

set -e

tar -xf gmp-6.2.1.tar.xz
cd gmp-6.2.1
sed -i -e 's/\(gmp_compile="$cc .*conftest.c\)/\1 $LIBS/g' configure
sed -i -e 's/\(gmp_compile="$CC .*conftest.c\)/\1 $LIBS/g' configure

if [ "$4" = "false" ]; then
    SHARED_LIBRARY_ARG="--disable-shared"
fi

ac_cv_func_obstack_vprintf=no \
ac_cv_func_localeconv=no \
./configure --host="$2" CC="$1" CPPFLAGS="$3" LIBS="$5" $SHARED_LIBRARY_ARG

make SUBDIRS="mpn mpz mpq mpf"\
    -j10 \
    PRINTF_OBJECTS= SCANF_OBJECTS= \
    CFLAGS+="-Werror=implicit-function-declaration" CPPFLAGS="$3"

cp gmp.h ..
cp .libs/libgmp.a ..
if [ "$4" = "true" ]; then
    # depending on if the host is macos or not
    cp .libs/libgmp.so ../dllgmp.so || cp .libs/libgmp.dylib ../dllgmp.so 
else
    touch ../dllgmp.so
fi
