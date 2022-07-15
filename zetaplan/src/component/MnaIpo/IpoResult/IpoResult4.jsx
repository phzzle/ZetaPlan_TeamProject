import React from "react";
import "./../../../css/MnAIpo/iporesult.css";

const IpoResult4 = () => {
  return (
    <div id="IpoResult4">
      <section className="mnaipo-ma-section">
        <span className="mnaipo-ma-part"> SPAC상장의 개요</span>
        <div>
          <dl>
            <dt>의의</dt>
            <dd>
              SPAC (Special Purpose Acquisition Company)은 공모(IPO)를 통해 조달한 자금을 바탕으로 다른 기업과 합병하는
              것을유일한 목적으로 하는 명목회사 (Paper Company)입니다.
            </dd>
            <dt>SPAC 제도의 특징</dt>
            <dd>
              <table>
                <colgroup>
                  <col style={{width: "50%"}} />
                  <col style={{width: "50%"}} />
                </colgroup>
                <thead>
                  <tr>
                    <th>높은 투자 안정성</th>
                    <th>높은 환금과 유동성</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>공모자금의 90% 이상을 별도 예치, 3년내 합병에 실패할 경우 반환</li>
                        <li>예치금은 인출, 담보제공 금지</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>상장 후 장내 매도가능</li>
                        <li>합병 반대시 주식매수청구권 행사 가능</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>일반투자자에게 M&A 투자기회 제공</th>
                    <th>우량기업에 대규모 자금 조달</th>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>개인도 SPAC 주식 취득으로 M&A 투자 참여 가능</li>
                        <li>주주총회에서 일반주주가 합병을 결정(공모전 주주는 의결권 행사 제한)</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>우량기업과의 합병을 통해 상장과 유상증자를 동시에 하는 효과</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </dd>
          </dl>
        </div>
      </section>
    </div>
  );
};

export default IpoResult4;
