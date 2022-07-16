import React from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/iporesult.css";

const IpoResult = ({title, sub}) => {
  return (
    <div id="iporesult">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <section className="mnaipo-iporesult-section1">
          <div className="mnaipo-iporesult-title-container">
            <h2 className="mnaipo-iporesult-title">IPO 성과</h2>
            <div className="mnaipo-iporesult-title-line"></div>
          </div>
        </section>
        <section className="mnaipo-iposummary-section">
          <span className="mnaipo-iposummary-part">IPO의 효과</span>
          <div className="iposummary-effect">
            <dl>
              <dt>1. 필요자금 조달의 용이</dt>
              <dd>
                유상증자, 해외DR 발행, 전환사채, 교환사채 등 다양한 방법을 통해 대규모 필요자금을 쉽게 조달할 수
                있습니다.
              </dd>
              <dt>2. 기업인지도 제고</dt>
              <dd>
                상장법인의 주가 등이 신문ㆍTV 등 언론매체에서 수시로 보도됨으로써 기업의 홍보효과가 극대화되고 국내외
                투자자에 대한 당해 기업의 인지도를 제고할 수 있습니다. 또한 기업인지도 제고에 따라 우수 인재의 입사지원
                증가 및 우수인력의 확보가 용이합니다.
              </dd>
              <dt>3. 기업구조조정의 원활한 추진</dt>
              <dd>
                상장법인의 분할 또는 합병 등에 의해 설립된 회사를 쉽게 상장할 수 있도록 상장요건 정비 등 환경을
                조성함으로써 상장법인의 경영목적에 맞는 방법으로 구조조정을 원활하게 추진할 수 있습니다.
              </dd>
            </dl>
          </div>
        </section>
        <section className="mnaipo-iposummary-section">
          <span className="mnaipo-iposummary-part">IPO의 혜택</span>
          <div>
            <table>
              <colgroup>
                <col style={{width: "15%"}} />
                <col style={{width: "85%"}} />
              </colgroup>
              <tr>
                <th>개업에 대한 혜택</th>
                <td>
                  <dl>
                    <dt>공모를 통한 유증상자 용이 (자본시장법 제165조의6)</dt>
                    <dd>
                      상장법인은 정관이 정하는 바에 따라 이사회의 결의로써 주주의 신주인수권을 배제하고 불특정
                      다수인(당해 기업의 주주를 포함한다)을 상대로 하여 신주를 모집할 수 있습니다.
                    </dd>
                    <dt>의결권 없는 주식의 발행한도 특례 (자본시장법 제165조의15)</dt>
                    <dd>
                      비상장법인은 의결권 없는 주식을 발행주식총수의 25%까지 발행할 수 있습니다. 그러나 상장법인이
                      외국에서 주식을 발행하거나 외국에서 발행한 해외전환사채, 해외신주인수권부사채, 기타 주식과 관련된
                      증권 또는 증서의 권리행사로 발행하는 의결권 없는 주식은 발행한도의 계산에 산입되지 않습니다.
                    </dd>
                    <dt>주식배당의 특례 (자본시장법 제165조의13)</dt>
                    <dd>
                      비상장법인은 주식배당을 배당가능이익액의 1/2를 초과하지 못하나, 상장법인은 배당가능 이익총액에
                      상당하는 금액까지 주식배당을 할 수 있습니다.
                    </dd>
                    <dt>주주총회 소집절차의 간소화 (상법 제542조의4)</dt>
                    <dd>
                      비상장법인의 주주총회의 소집통지는 각 주주에게 서면으로 하게 되어 있으나, 상장법인의 주주총회
                      소집통지는 의결권 있는 발행주식총수의 1%이하를 소유하는 주주에 대하여 정관이 정하는 바에 따라
                      주주총회일 2주전에 2개 이상의 일간신문에 각각 2회 이상 공고함으로써 이를 갈음할 수 있습니다.
                    </dd>
                  </dl>
                </td>
              </tr>
              <tr>
                <th>주주에 대한 혜택</th>
                <td>
                  <dl>
                    <dt>주식양도소득에 대한 비과세 (소득세법 제94조, 동법시행령 제157조제4항)</dt>
                    <dd>
                      상장주식은 대주주 등을 제외하고 주식양도에 따른 양도소득세를 부과하지 않고 있기 때문에 상장을 위해
                      모집하거나 유가증권시장을 통하여 양도하는 경우에는 양도소득세가 면제됩니다. 그러나 비상장주식은
                      양도차익의 20%(중소기업의 경우 10%, 중소기업 이외의 법인의 주식을 소유한 대주주로서 1년 미만
                      보유시 30%)를 세금으로 납부하여야 합니다.
                    </dd>
                    <dt> 상속 및 증여재산의 시가평가 (상속및증여세법 제63조 및 동법시행령 제53조)</dt>
                    <dd>
                      비상장법인이 발행한 주식을 상속 또는 증여할 경우 상속세 및 증여세법에서 정한 산식으로 평가하나,
                      상장법인이 발행한 주식을 상속 또는 증여할 경우 평가기준일 전․후 각각 2개월간 최종시세의 평균액으로
                      평가합니다.
                    </dd>
                    <dt>증권거래세 탄력세율 적용 (증권거래세법 제8조 및 동법시행령 제5조)</dt>
                    <dd>
                      비상장법인의 발행주식을 양도하는 경우 0.5%의 증권거래세율이 적용되지만, 유가증권시장을 통해
                      양도되는 상장법인의 주식은 0.15%(0.15%의 농특세 추가부담)의 세율이 적용됩니다.
                    </dd>
                    <dt>소수주주권 행사완화 등 (상법 제542조의6, 제542조의7)</dt>
                    <dd>상장법인의 경우 상법상 소수주주권 및 집중투표제 행사요건(1%) 등이 완화되어 적용됩니다.</dd>
                  </dl>
                </td>
              </tr>
            </table>
          </div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IpoResult;
