"use client";

import { AllImages } from "@/assets/AllImage";
import { Divider } from "antd";
import Image from "next/image";

const RulesJoinedChallenge = () => {
  return (
    <div className="lg:w-[50%] mx-auto my-20">
      <div>
        <h3 className="font-semibold mb-3  text-xl">Submission Limit</h3>
        <p>1 Photo submits per participants</p>
      </div>
      <Divider
        type="horizontal"
        style={{ borderColor: "#fd8533", height: "5vh" }}
      />
      <div className="flex gap-6 ">
        <Image
          src={AllImages.contest.Format}
          className="h-fit w-12"
          alt="Submission Format"
        />
        <div>
          <h3 className="font-semibold mb-3 text-xl">Submission Format</h3>
          <p>
            <span className="text-site-color">JPEG</span>, minimum resolution of
            <span className="text-site-color"> 7000px</span> x{" "}
            <span className="text-site-color">700px</span>; maximum size{" "}
            <span className="text-site-color">25MB</span>
          </p>
        </div>
      </div>
      <Divider
        type="horizontal"
        style={{ borderColor: "#fd8533", height: "5vh" }}
      />
      <div className="flex gap-6 ">
        <Image
          src={AllImages.contest.Rules}
          className="h-fit w-14"
          alt="Submission Rules"
        />
        <div>
          <h3 className="font-semibold mb-2 text-xl">Submission Rules</h3>
          <p className="text-site-color font-semibold text-xl">Do not post</p>
          <p className="font-normal text-sm my-1">1. Specify theme.</p>
          <p className="font-normal text-sm my-1">
            2. Set deadline for submissions.
          </p>
          <p className="font-normal text-sm my-1">
            3. Limit number of entries per participant.
          </p>
          <p className="font-normal text-sm my-1">
            4. Define image requirements (size, format).
          </p>
          <p className="font-normal text-sm my-1">
            5. Include submission instructions (email or form).
          </p>
          <p className="font-normal text-sm my-1">
            6. Outline judging criteria.
          </p>
          <p className="font-normal text-sm my-1">
            7. Communicate notification timeline.
          </p>
          <p className="font-normal text-sm my-1">
            8. Provide contact information for inquiries.
          </p>
        </div>
      </div>
      <Divider
        type="horizontal"
        style={{ borderColor: "#fd8533", height: "5vh" }}
      />
      <div className="flex gap-6 ">
        <Image
          src={AllImages.contest.Eligibility}
          className="h-14 w-fit"
          alt="Eligibility"
        />
        <div>
          <h3 className="font-semibold mb-2 text-xl">Eligibility</h3>
          <p className="font-normal text-sm my-1">
            Open to photographers aged 18 and above. Photos must be free of
            obscene, provocative, defamatory, explicit, or inappropriate
            content. Disqualification for inappropriate submissions. Challenge
            void where prohibited.
          </p>
        </div>
      </div>
      <Divider
        type="horizontal"
        style={{ borderColor: "#fd8533", height: "5vh" }}
      />
      <div className="flex gap-6 ">
        <Image
          src={AllImages.contest.copyright}
          className="h-14 w-fit"
          alt="Submission copyright"
        />
        <div>
          <h3 className="font-semibold mb-2 text-xl">Copyright</h3>
          <p className="font-normal text-sm my-1">
            You maintain the copyrights to all photos you submit. You must own
            all submitted images. If you submit images that don't belong to you,
            your account will be permanently removed
          </p>
        </div>
      </div>
      <Divider
        type="horizontal"
        style={{ borderColor: "#fd8533", height: "5vh" }}
      />
      <div className="flex gap-6 ">
        <Image
          src={AllImages.modal.voteIcon}
          className="h-14 w-fit"
          alt="Submission Format"
        />
        <div>
          <h3 className="font-semibold mb-2 text-xl">Voting</h3>
          <p className="font-normal text-sm my-1">
            Exclusive site member voting. Fairness ensured through blind voting
            method, preserving impartiality and integrity throughout the voting
            process.
          </p>
        </div>
      </div>
      <Divider
        type="horizontal"
        style={{ borderColor: "#fd8533", height: "5vh" }}
      />
      <div className="flex gap-6 ">
        <Image
          src={AllImages.contest.participate}
          className="h-14 w-fit"
          alt="Participation"
        />
        <div>
          <h3 className="font-semibold mb-2 text-xl">Participation</h3>
          <p className="font-normal text-sm my-1">
            By entering this challenge you accept the standard Terms of Use.
          </p>
        </div>
      </div>
      <Divider
        type="horizontal"
        style={{ borderColor: "#fd8533", height: "5vh" }}
      />
    </div>
  );
};

export default RulesJoinedChallenge;
