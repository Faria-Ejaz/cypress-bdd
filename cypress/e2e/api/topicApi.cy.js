describe("Topics API Suite", () => {

  it("returns a list of topics", () => {
    cy.request(
      "GET",
      "https://api.perlego.com/catalogue-service/v1/topics"
    ).then((response) => {
      const body = response.body;
      expect(response.status).to.eq(200);
      expect(body.data.results).length.to.be.gt(1);
      expect(body).to.have.property("success");
      expect(body).to.have.property("message");
    });
  });

  it("returns a 403 Forbidden response for an invalid authorization", () => {
    cy.request({
      method: "GET",
      url: "https://api.perlego.com/catalogue-service/v1/topics",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(403);
    });
  });
});
