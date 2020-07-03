import { useState, useEffect } from "react";

function useImage(storage) {
  const [image, setImage] = useState("");

  useEffect(() => {
    const imgRef = storage.ref("images/default.png");
    imgRef.getDownloadURL().then((url) => setImage(url));
  }, [storage]);

  return { image, setImage };
}

export default useImage;
