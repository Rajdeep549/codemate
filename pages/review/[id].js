import React, { useEffect, useState } from "react";

// router
import { useRouter } from "next/router";

// components
import { RightBar, InfoBar, Header } from "../../components";

// head
import Head from "next/head";
import axios from "axios";

const Cheatsheet = (props) => {
  const router = useRouter(); // router

  const [data, setData] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(1);

  // getting the id
  const { id } = router.query;

  const filterPosts = (data, id) => {
    if (!id) {
      return data;
    }

    return data.filter((cheatsheet) => {
      const cheatId = cheatsheet.id;
      return cheatId.includes(id);
    });
  };

  useEffect(async () => {
    const allCheatsheets = await axios.get("/api/GET/review");
    const cheatSheets = allCheatsheets.data;

    setData(cheatSheets);
  }, [fetchAgain]);

  // gets the currentPost
  const currentPost = filterPosts(data, id);

  return (
    <div className="bg-image">
      <Head>
        <title>
          {currentPost[0] && currentPost[0].cheatsheet_name}- Code Mate
        </title>
      </Head>
      <Header {...props} />
      <div className="h-full min-h-screen p-6 flex items-start justify-start relative">
      {currentPost[0] && (<InfoBar
          currentPost={currentPost}
          {...props}
          fetchAgain={fetchAgain}
          setFetchAgain={setFetchAgain}
          review={true}
        />)}
        <RightBar currentPost={currentPost} {...props} />
      </div>
    </div>
  );
};

export default Cheatsheet;
