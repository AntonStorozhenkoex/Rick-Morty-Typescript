import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { client } from "../graphql/config";
import { gql } from "@apollo/client";
import { getQueryBody } from "../services";
import { useRouter } from "next/router";
import { useState } from "react";
import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { CharactersList } from "../components/CharactersList";
import { Formik, Form } from "formik";
import { ICharacter } from "../types/Character";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { status, gender, type, species } = context.query;

  const { data } = await client.query({
    query: gql`
      ${getQueryBody(type, gender, status, species)}
    `,
  });
  return {
    props: {
      characters: data.characters.results,
    },
  };
};

type Results = {
  characters: ICharacter[];
};

const Home: NextPage = (results) => {
  const router = useRouter();

  const { characters: defaultValue = [] } = results as Results;
  const [charactersArray, setCharactersArray] = useState(defaultValue);

  const onSubmit = async (
    type: string | string[],
    gender: string | string[],
    status: string | string[],
    species: string | string[],
  ) => {
    const result = await fetch("/api/getCharacterByFilter", {
      method: "post",
      body: JSON.stringify({
        status,
        species,
        type,
        gender,
      }),
    });
    const data = await result.json();
    setCharactersArray(data.characters);
    router.push(
      {
        pathname: "/",
        query: {
          ...router.query,
          status,
          gender,
          type,
          species,
        },
      },
      undefined,
      {},
    );
  };

  return (
    <div>
      <Head>
        <title>Rick&Morty</title>
      </Head>
      <main>
        <Header />
        <Formik
          initialValues={{
            type: router.query.type || "",
            gender: router.query.gender || "",
            status: router.query.status || "",
            species: router.query.species || "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values.type, values.gender, values.status, values.species);
            setSubmitting(false);
          }}
        >
          {() => (
            <Form>
              <SearchForm />
            </Form>
          )}
        </Formik>
        <CharactersList data={charactersArray} />
      </main>
    </div>
  );
};

export default Home;
