import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col gap-8 p-6">
      <h1 className="text-3xl font-bold">Landing Page</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Card Example</h2>
        <div className="flex justify-center">
          <Card />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons Example</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 flex-wrap">
            <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
            <Button title="Small Rounded-md" size="small" shape="rounded-md" />
            <Button title="Small Rounded-lg" size="small" shape="rounded-lg" />
            <Button title="Small Rounded-full" size="small" shape="rounded-full" />
          </div>

          <div className="flex gap-4 flex-wrap">
            <Button title="Medium Rounded-sm" size="medium" shape="rounded-sm" />
            <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
            <Button title="Medium Rounded-lg" size="medium" shape="rounded-lg" />
            <Button title="Medium Rounded-full" size="medium" shape="rounded-full" />
          </div>

          <div className="flex gap-4 flex-wrap">
            <Button title="Large Rounded-sm" size="large" shape="rounded-sm" />
            <Button title="Large Rounded-md" size="large" shape="rounded-md" />
            <Button title="Large Rounded-lg" size="large" shape="rounded-lg" />
            <Button title="Large Rounded-full" size="large" shape="rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;