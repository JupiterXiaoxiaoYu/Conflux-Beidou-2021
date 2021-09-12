'reach 0.1';



export const main = Reach.App(() => {
  
  const Player = {
    printTransactionDetail: Fun([], Null),
    // informTimeout: Fun([], Null),
  };

    const Buyer = Participant('Buyer', {
        ...Player,
        getPrice:Fun([],UInt),
        getToken:Fun([],Token)
      });
    const Seller = Participant('Seller', {
       ...Player,
       acceptTransaction: Fun([UInt], Null),
    });
  
    deploy();

    Buyer.only(() => {
    const transactionAmount = declassify(interact.getPrice());
    const Copoint = declassify(interact.getToken())
    });
    Buyer.publish(transactionAmount,Copoint)
      . pay([ [transactionAmount, Copoint] ]);;

    commit();

    Seller.only(() => {
      interact.acceptTransaction(transactionAmount);
    });
    Seller.publish();
    transfer(transactionAmount,Copoint).to(Seller);

    commit();

    each([Buyer, Seller], () => {
      interact.printTransactionDetail();
    }
    );
    Anybody.publish()
    commit()

    exit()
});