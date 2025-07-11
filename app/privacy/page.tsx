"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      {" "}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
        <Link href="/">
          <button className="flex items-center text-blue-600 hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Go Back
          </button>
        </Link>

        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="mb-6">Last updated: July 11, 2025</p>

        <p className="mb-4">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <p className="mb-4">
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy. This Privacy Policy has been
          created with the help of the{" "}
          <a
            href="https://www.termsfeed.com/privacy-policy-generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Privacy Policy Generator
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Interpretation and Definitions
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-2">Interpretation</h3>
        <p className="mb-4">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Definitions</h3>
        <p className="mb-4">For the purposes of this Privacy Policy:</p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>
            <strong>Account</strong> means a unique account created for You to
            access our Service or parts of our Service.
          </li>
          <li>
            <strong>Affiliate</strong> means an entity that controls, is
            controlled by or is under common control with a party.
          </li>
          <li>
            <strong>Company</strong> refers to Datakernels Analytics and
            Consulting LLP, North Avenue, Patiala - 147004, Punjab, India.
          </li>
          <li>
            <strong>Cookies</strong> are small files that are placed on Your
            device by a website, containing details of Your browsing history.
          </li>
          <li>
            <strong>Country</strong> refers to: Punjab, India.
          </li>
          <li>
            <strong>Device</strong> means any device that can access the
            Service.
          </li>
          <li>
            <strong>Personal Data</strong> is any information that relates to an
            identified or identifiable individual.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>Service Provider</strong> means any party who processes data
            on behalf of the Company.
          </li>
          <li>
            <strong>Usage Data</strong> refers to data collected automatically
            from the use of the Service.
          </li>
          <li>
            <strong>Website</strong> refers to Datakernels, accessible from{" "}
            <a
              href="https://www.datakernels.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://www.datakernels.in/
            </a>
          </li>
          <li>
            <strong>You</strong> means the individual or legal entity using the
            Service.
          </li>
        </ul>

        {/* You can repeat this structure for each section of the Privacy Policy */}
        {/* Use h2 for main sections, h3 for sub-sections, p for text, and ul/li for lists */}
        {/* For brevity, only the first section is shown here, but the same format should be applied to the rest */}

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Collecting and Using Your Personal Data
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-2">
          Types of Data Collected
        </h3>
        <h4 className="text-lg font-semibold mt-4 mb-2">Personal Data</h4>
        <p className="mb-2">
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information, including but not limited to:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Usage Data</li>
        </ul>

        {/* Continue here with the rest of your content in the same structure */}

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul className="list-disc list-inside mb-12">
          <li>
            Email:{" "}
            <a
              href="mailto:admin@datakernels.in"
              className="text-blue-600 underline"
            >
              admin@datakernels.in
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default PrivacyPolicy;
