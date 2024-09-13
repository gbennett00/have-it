import { getPromotion } from "../lib/promotions";

export default function Page({ params }: { params: { id: string } }) {
  const post = getPromotion(parseInt(params.id, 10));
  if (!post) return <div>Post not found</div>;
  return (
    <>
      <div>My Post: {params.id}</div>
      <div>Stuff: {post.name}</div>
      <div>Stuff: {post.tag}</div>
      <div>Stuff: {post.discount}</div>
    </>
  );
}