import React, { useEffect } from "react";
import "./perfoCenter.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "My Skill",
    },
  },
};

export const data = {
  datasets: [
    {
      label: "HTML",
      data: { 0.8: "1" },
      borderColor: "white",
      backgroundColor: "orange",
    },

    {
      label: "CSS",
      data: { 0.75: "2" },
      borderColor: "white",
      backgroundColor: "blue",
    },

    {
      label: "JAVASCRIPT",
      data: { 0.8: "3" },
      borderColor: "white",
      backgroundColor: "green",
    },

    {
      label: "REACT",
      data: { 0.75: "4" },
      borderColor: "white",
      backgroundColor: "grey",
    },

    {
      label: "EXPRESS",
      data: { 0.85: "5" },
      borderColor: "white",
      backgroundColor: "violet",
    },
  ],
};
const PerfoCenter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-down-right" id="about">
      <div className="perfoCenter_container">
        <div className="perfoCenter_main_title">
          <h4 className="perfoCenter_main_t">About My Skill</h4>
        </div>

        <div className="perfoCenter_wrapper">
          <div className="perfoCenter_left">
            <div className="perfoCenter_icon">
              <SchoolOutlinedIcon
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </div>
            <div className="perfoCenter_des">
              <div className="perfoCenter_title">Follow Me</div>
              <div className="perfoCenter_logoes">
                <div className="perfoCenter_logo">
                  <FacebookOutlinedIcon />
                </div>
                <div className="perfoCenter_logo">
                  <InstagramIcon />
                </div>
                <div className="perfoCenter_logo">
                  <TwitterIcon />
                </div>
                <div className="perfoCenter_logo">
                  <GitHubIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="perfoCenter_right">
            <Bar options={options} data={data} className="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfoCenter;
