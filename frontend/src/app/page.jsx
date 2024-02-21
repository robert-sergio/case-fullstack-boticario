import Header from "@/components/header";
import Content from "@/components/content";
import Cardlist from "@/components/content/cardlist";
import CartModal from "@/components/cart/cartmodal";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <CartModal />
      <Content >
        <Cardlist />
      </Content>
    </main>
  );
}
