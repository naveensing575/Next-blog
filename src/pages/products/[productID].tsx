import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { productID } = router.query;
  return <h1>This is product: {productID}</h1>;
}