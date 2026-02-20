import os
import shutil

src = "public/product offering"
dst = "public/product-offering"

if os.path.exists(src):
    try:
        os.rename(src, dst)
        print(f"Renamed '{src}' to '{dst}'")
    except Exception as e:
        print(f"Error: {e}")
else:
    print(f"'{src}' not found")
