import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Prod = () => {
  const [itemList, setItemList] = useState([]);
  const observerTarget = useRef(null);

  const getFetch = () => {
    fetch("/data/MOCK.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) return;
        setItemList((prev) => [...prev, ...data]);
      });
  };

  useEffect(() => {
    let observer;
    if (observerTarget.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          getFetch();
        }
      });
      observer.observe(observerTarget.current);
    }
    return () => {
      observer && observer.disconnect();
    };
  });

  return (
    <>
      <ProductListContainer>
        <ProductListBox>
          {itemList.map((data) => (
            <ProductCard key={data.id} {...data} />
          ))}
        </ProductListBox>
      </ProductListContainer>
      <div ref={observerTarget}></div>
    </>
  );
};

export default Prod;

const ProductListContainer = styled.div`
  width: fit-content;
  margin: 20px auto;
`;
const ProductListBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  width: 100%;
  grid-gap: 30px;

  @media (min-width: 670px) and (max-width: 1128px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1128px) and (max-width: 1439px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
