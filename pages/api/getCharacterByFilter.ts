import { gql } from "@apollo/client";
import { client } from "../../graphql/config";
import { getQueryBody } from "../../services";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { type, gender, status, species } = JSON.parse(req.body);

  try {
    const { data } = await client.query({
      query: gql`
        ${getQueryBody(type, gender, status, species)}
      `,
    });
    res.status(200).json({ characters: data.characters.results, error: null });
  } catch (error: any) {
    if (error.message === "404: Not Found") {
      res.status(404).json({ characters: null, error: "No Characters found" });
    } else {
      res
        .status(500)
        .json({ characters: null, error: "Internal Error, Please try again" });
    }
  }
};
