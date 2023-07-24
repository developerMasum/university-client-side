import { Gallery } from "react-grid-gallery";
 const images = [
  {
    "src": "https://i.ibb.co/VJQs5GV/download-5.jpg",
    "width": 320,
    "height": 212,
    "caption": "Boats (Jeshu John - designerspics.com)"
  },
  {
      "src": "https://i.ibb.co/sJ56vN1/download-4.jpg",
      "width": 320,
      "height": 212,
      "caption": "Boats (Jeshu John - designerspics.com)"
    },
    {
      "src": "https://i.ibb.co/Yt2jkWc/download-3.jpg",
      "width": 550,
      "height": 212,
      "caption": "Boats (Jeshu John - designerspics.com)"
    },
    {
      "src": "https://i.ibb.co/ZXDyyRj/download-2.jpg",
      "width": 320,
      "height": 212,
      "caption": "Boats (Jeshu John - designerspics.com)"
    },
    {
      "src": "https://i.ibb.co/qNm2kg7/images-1.jpg",
      "width": 320,
      "height": 212,
      "caption": "Boats (Jeshu John - designerspics.com)"
    },
    {
      "src": "https://i.ibb.co/v41L3tP/download-1.jpg",
      "width": 320,
      "height": 212,
      "caption": "Boats (Jeshu John - designerspics.com)"
    },
    {
      "src": "https://i.ibb.co/bgKst37/download.jpg",
      "width": 320,
      "height": 212,
      "caption": "Boats (Jeshu John - designerspics.com)"
    },
    {
      "src": "https://i.ibb.co/6sKd19G/images.jpg",
      "width": 320,
      "height": 212,
      "caption": "Boats (Jeshu John - designerspics.com)"
}]


const modifiedImages = images.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption my-container">
      <div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))}
    </div>
  ),
}));

export default function GallerySection() {
  return (
    <div className="my-container">
   <div className="text-center mb-5">
          <p className="text-xs uppercase text-gray-400">Gallery</p>
          <p className="text-cyan-600 text-xl font-bold">
        Graduates photo gallery of some colleges
          </p>
          <div className="flex items-center justify-center">
            <hr className="half-red-half-white h-1 w-96 " />
          </div>
        </div>
      <Gallery images={modifiedImages} enableImageSelection={false} />
    </div>
  );
}
