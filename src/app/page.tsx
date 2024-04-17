const mockUrls = [
  "https://utfs.io/f/2e206dba-d94a-448d-9cc2-463d85b182da-ipmsw2.jpg",
  "https://utfs.io/f/ac7c70af-3b1b-4bec-95eb-bbefb72d35fe-903zh0.jpg",
  "https://utfs.io/f/71fd7409-edae-4c18-9fe1-2cfcdd65016a-78knyu.jpg",
  "https://utfs.io/f/18c14c05-607d-499a-81e2-14b7159e006a-7ogtqn.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index++,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div className="w-48" key={image.id}>
            <img src={image.url} alt={`image-${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
