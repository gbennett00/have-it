export default function SuggestionCard({ imageURL, name }: { imageURL: string, name: string }) {
  return (
    <div className="flex flex-col items-center">
      <img src={imageURL} alt={name} className="w-32"/>
      <p className="text-sm">{name}</p>
    </div>
  );
}