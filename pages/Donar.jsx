import {
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import Navbar from "../components/NavBar";

function BloodDonation() {
  return (
    <Card
      sx={{
        width: "100%",
        marginBottom: 4,
        padding: 2,
        backgroundColor: "#ffebee",
        borderRadius: 2,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Blood Donation
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Blood donation is a voluntary procedure that helps save lives. Learn
          more about how you can contribute to this noble cause and the impact
          it can make on patients in need.
        </Typography>
      </CardContent>
    </Card>
  );
}

function OrganDonation() {
  return (
    <Card
      sx={{
        width: "100%",
        marginBottom: 4,
        padding: 2,
        backgroundColor: "#e8f5e9",
        borderRadius: 2,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Organ Donation
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Organ donation involves giving organs for transplantation to help
          those suffering from severe organ failure. Discover how you can become
          an organ donor and make a difference.
        </Typography>
      </CardContent>
    </Card>
  );
}

function Fundraising() {
  return (
    <Card
      sx={{
        width: "100%",
        marginBottom: 4,
        padding: 2,
        backgroundColor: "#fff3e0",
        borderRadius: 2,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Fundraising
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Fundraising events and campaigns help raise money for various causes.
          Learn about upcoming events and how you can get involved to support
          meaningful projects and initiatives.
        </Typography>
      </CardContent>
    </Card>
  );
}


function StemCellDonation() {
  return (
    <Card
      sx={{
        width: "100%",
        marginBottom: 4,
        padding: 2,
        backgroundColor: "#f3e5f5",
        borderRadius: 2,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Stem Cell Donation
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Stem cell donation is a life-saving procedure that plays a crucial
          role in treating patients with blood cancers and other serious
          diseases. By donating stem cells, you can offer a second chance at
          life to those in need of a transplant.
        </Typography>
      </CardContent>
    </Card>
  );
}

function Donar() {
  return (
    <div>
      <Navbar />
      <Container>
        <Link to="/blood" component={RouterLink} underline="none">
          <Box sx={{ marginY: 4 }}>
            <BloodDonation />
          </Box>
        </Link>
        <Link to="/organ" component={RouterLink} underline="none">
          <Box sx={{ marginY: 4 }}>
            <OrganDonation />
          </Box>
        </Link>
        <Link to="/fundraising" component={RouterLink} underline="none">
          <Box sx={{ marginY: 4 }}>
            <Fundraising />
          </Box>
        </Link>
        <Link to="/stemcell" component={RouterLink} underline="none">
        <Box sx={{ marginY: 4 }}>
          <StemCellDonation />
        </Box>
      </Link>
      </Container>
      <FooterNavBar />
      <Footer />
    </div>
  );
}

export default Donar;
