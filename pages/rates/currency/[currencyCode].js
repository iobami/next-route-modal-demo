import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import Rates from "../../../components/rates";
import RatesPage from '../index';

export default function CurrencyPage() {
  const router = useRouter();
  const { currencyCode } = router.query;

  let currentComponent = '';
  if (router.components) currentComponent = router.components['/rates/currency/[currencyCode]'];

  if (currentComponent) {
    currentComponent.Component = RatesPage;
  } 

  return (
    <Layout>
      <Rates currencyCode={currencyCode} />
    </Layout>
  );
}
