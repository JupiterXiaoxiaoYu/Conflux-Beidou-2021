'reach 0.1';

const Business = {
    informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {

const Buyer = Participant('Buyer', {
        ...Business,
        getUSDTAmount: Fun([],UInt),
        getToken:Fun([],Tuple(Token,Token))
      });
const Seller = Participant('Seller', {
       ...Business,
       CoPointsAmount: Fun([],UInt)
    });
    deploy();

    Buyer.only(() => {
    const USDTPaid = declassify(interact.getUSDTAmount());
    const [COP,USDT] = declassify(interact.getToken());
    assume(COP != USDT)
    });
    Buyer.publish(USDTPaid,COP,USDT)
        .pay([[USDTPaid,USDT]]);
    commit();

    Seller.only(() => {
    const exchangeRate = 1;
    const CoPointsSent = USDTPaid*exchangeRate;
    });
    Seller.publish(CoPointsSent).pay([[CoPointsSent,COP]]);
    transfer(USDTPaid,USDT).to(Seller)
    transfer(CoPointsSent,COP).to(Buyer);

    commit();

});
