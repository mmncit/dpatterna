import CryptoEncoding from "../utils/crypto-encoding";
// test
describe("encode and then decode", () => {
  it("encode followed by decode gives original string", () => {
    expect(CryptoEncoding.decode(CryptoEncoding.encode("zzz ZZ  zZ"))).toEqual(
      "zzz ZZ  zZ"
    );
  });
});
