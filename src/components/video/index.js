import { useState } from "react";

import { Container } from "./style";

import { itemVariants } from "../../styles/global";

import { motion } from "framer-motion";

import YouTube from "react-youtube";

export const Video = ({ height, width, url, ...rest }) => {
  const [videoId] = useState(url.split("/").reverse()[0]);
  console.log(url);
  console.log(videoId);

  return (
    <Container className="box-video" height={height} width={width} {...rest}>
      <motion.div variants={itemVariants}>
        <YouTube videoId={videoId} />
      </motion.div>
    </Container>
  );
};
