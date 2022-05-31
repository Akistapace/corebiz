import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ProductSlide } from "./ProductSlide";
import { ContainerProducts, Title } from "./style";

export const ProductList = ()=> {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const sendGetRequest = async () => {
      try {
          const resp = await api.get("/products");
          setProducts(resp.data)
          setTimeout(() => {
            setLoading(false)
          }, 500);
      } catch (err) {
          console.error(err);
      }
    };
    sendGetRequest();
  }, []);

  return (
    <ContainerProducts>
     <Title>Mais Vendidos</Title>
     <ProductSlide products={products} loading={loading} />
    </ContainerProducts>
  );
}