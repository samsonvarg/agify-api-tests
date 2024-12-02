import { Given, When, Then } from "@cucumber/cucumber";
import request from "supertest";
import { expect } from "chai";

let apiEndpoint: string;
let response: request.Response;

Given("the API endpoint is {string}", function (endpoint: string) {
  apiEndpoint = endpoint;
});

When("I send a GET request with name {string}", async function (name: string) {
  response = await request(apiEndpoint).get(`/?name=${name}`);
});

Then("the response status should be {int}", function (status: number) {
  expect(response.status).to.equal(status);
});

Then("the response should contain the age", function () {
  expect(response.body).to.have.property("age");
});
