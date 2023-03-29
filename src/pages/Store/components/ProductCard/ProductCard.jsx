import React, { useState } from "react";
import './ProductsCard.scss'
import { useCart } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";
import { useLike } from '../../contexts/CustomContext'
import checked2 from '../../../Store/img/btn-checked.svg'
import checked from '../../img/btn-checked.svg'
import plus from '../../img/btn-plus.svg'
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const { addProductToCart, checkProductInCart } = useCart();
  const {addProductToLike,checkProductInLike } =useLike()
  const handleClickAddToCart = () => {
    setIsAdded(!isAdded)
    addProductToCart(item)
  }
  const handleClickAddToCartLike = () => {
    setIsLiked(!isLiked)
    addProductToLike(item)
  }

  return (
    <div className="card2">
      <div className="favorite90">
        <div
          className='plus'
          width={32}
          height={32}
          onClick={() => handleClickAddToCartLike()} >
          {/* checkProductInCart(item.id)  */}
          {
            checkProductInLike(item.id) ?
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="7" fill="#FEF0F0" />
                <path d="M23.6129 11.869C23.3646 11.3076 23.0067 10.7988 22.5591 10.3712C22.1111 9.94231 21.583 9.60147 21.0033 9.36723C20.4023 9.12337 19.7577 8.99855 19.1068 9.00001C18.1938 9.00001 17.3029 9.24422 16.5288 9.70551C16.3435 9.81585 16.1676 9.93705 16.0009 10.0691C15.8342 9.93705 15.6583 9.81585 15.4731 9.70551C14.6989 9.24422 13.8081 9.00001 12.895 9.00001C12.2375 9.00001 11.6004 9.12302 10.9985 9.36723C10.4169 9.6024 9.89281 9.94067 9.44276 10.3712C8.99455 10.7983 8.63651 11.3072 8.38893 11.869C8.1315 12.4533 8 13.0738 8 13.7124C8 14.3147 8.12594 14.9424 8.37597 15.581C8.58525 16.1146 8.88529 16.6682 9.26866 17.2272C9.87614 18.1117 10.7114 19.0343 11.7486 19.9695C13.4673 21.5198 15.1693 22.5907 15.2416 22.6341L15.6805 22.9091C15.875 23.0303 16.125 23.0303 16.3195 22.9091L16.7584 22.6341C16.8306 22.5889 18.5308 21.5198 20.2514 19.9695C21.2886 19.0343 22.1238 18.1117 22.7313 17.2272C23.1147 16.6682 23.4166 16.1146 23.624 15.581C23.874 14.9424 24 14.3147 24 13.7124C24.0018 13.0738 23.8703 12.4533 23.6129 11.869V11.869Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1="16" y1="9" x2="16" y2="23" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB0B0" />
                    <stop offset="1" stopColor="#FF4343" />
                  </linearGradient>
                </defs>
              </svg>
              : <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8" />
                <path d="M21.149 11.356L21.1484 11.3554C20.8095 11.0258 20.4097 10.7636 19.9705 10.5833L19.9696 10.5829C19.5139 10.3951 19.0249 10.2989 18.5311 10.3L18.5295 10.3C17.8346 10.3 17.1584 10.4887 16.5717 10.8438L16.5717 10.8439C16.4313 10.9288 16.2985 11.0218 16.173 11.1228L15.7341 11.476L15.2953 11.1228C15.1698 11.0218 15.037 10.9288 14.8966 10.8439L14.8966 10.8438C14.3099 10.4887 13.6337 10.3 12.9388 10.3C12.4373 10.3 11.9546 10.395 11.4987 10.5829L11.498 10.5832C11.057 10.7644 10.6606 11.0243 10.3197 11.3556L10.3187 11.3566L10.3187 11.3566C9.98111 11.6834 9.71174 12.0725 9.52557 12.5016L21.149 11.356ZM21.149 11.356C21.4865 11.6835 21.7561 12.0729 21.943 12.5022C22.1365 12.9487 22.2347 13.4204 22.2333 13.9064V13.9084C22.2333 14.3625 22.1399 14.8512 21.9418 15.3651L21.9412 15.3667M21.149 11.356L21.9412 15.3667M12.3799 19.1131L12.38 19.1132C13.1291 19.7996 13.8773 20.3822 14.4475 20.7988C14.732 21.0066 14.9709 21.1721 15.1415 21.2873C15.2268 21.345 15.2948 21.3899 15.3428 21.4212C15.3857 21.4492 15.4091 21.464 15.4144 21.4673C15.4154 21.4679 15.4158 21.4682 15.4155 21.468L15.4266 21.4748L15.4266 21.4749L15.7333 21.6701L16.0401 21.4749L16.0402 21.4748C16.0914 21.4423 17.5822 20.4902 19.0868 19.1131H12.3799ZM12.3799 19.1131C11.4753 18.2845 10.7634 17.4818 10.255 16.7299M12.3799 19.1131L10.255 16.7299M21.9412 15.3667C21.7771 15.7954 21.5328 16.2542 21.2114 16.7303M21.9412 15.3667L21.2114 16.7303M10.255 16.7299C9.93467 16.2553 9.69124 15.796 9.52486 15.3651L10.255 16.7299ZM21.2114 16.7303C20.7031 17.482 19.9913 18.2845 19.087 19.1129L21.2114 16.7303ZM9.23333 13.9084C9.23333 13.4208 9.33184 12.9483 9.52554 12.5017L9.52472 15.3648C9.32672 14.851 9.23333 14.3624 9.23333 13.9084Z" stroke="#ECECEC" strokeWidth="1.4" />
              </svg>
          }
        </div>

      </div>
      <img
        onClick={() => navigate(`/details/${item.id}`)}
        width={133}
        height={112}
        src={item.picture}
        alt="Sneakers" />
      <h5>{item.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>${item.price}</b>
        </div>
        <img
          onClick={() => handleClickAddToCart()}
          className='plus'
          width={26}
          height={26}
          src={
            checkProductInCart(item.id)
              ?
              'data:image/png;base64,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' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACRCAMAAACxBweTAAAAn1BMVEX///8th/Eth+8thvMrh/EthvUqiPG/yNkzhuO/y9swhfErh/MzhPoyg/cth+0vgeJYjL0uiuZFgNeCocIzh+o3j+hFgNUrh94vgfErhd8vgu9Zi70riekqg+JYkNc0huo9hs1gj85djtc7gedDmPgtfe0ectckeNk6lPq/yuEed9dXltponeZBie6Gn8RYjc5ki7JCfcRAg9OVqr4/gsKXEANaAAAE6klEQVR4nO2ci3KjNhRAVxIitmSLksqpzELZ1ptN+l67/f9vqx4IhEPauMMuXFVnJhMLY3OP9ZaF371LJBKJRCLx5dg2H0X1uN8rVRmU4ZE+/rB0XDezLetPTFkR6kUUVfBE7jZPJ06NCKV9lsAUKQTTIrSDMVPIKFARU7RiFGGMxCKSgxTBRoQSjjSccy2D6/dLx3UzVmRvRJCFU91q4fKbpeO6mZciuhkGKzIULWSLloApoiv7bkeZrh7GhRPCZBJZjkCkqyTARVwVyUGL6FZLi+QWhBjcyh6lSG5EqraE2rMnkfWQRNZGrCIZqrSI2CSRxUgiayMUybIMJZGleSFiBo0t5EFjZgEuYmaIbqJrl1HgTqzsVJdFItLlCEZmqntIIouRRNZGL+JWtZLI4vgO0YuIjPMksiThECWJrIFBBH7Rcqvx4EXKxu58IH1lh9r8lo3kMYlQDr1DjEhEoCSyIraH4tmJOIxI1QIU0TnyxKhSoQiSAFfjf/r5+ZkRSgcRSnNc/7JkTL8qWtdkb6ADV2mb3O129r+iqCiE0JlAuBfBeqZ4epbInflWWLmh6uO384h8L3Bd8yFmH1twaIBYEMNYYLt5A3t0hcdabuJ1fArbRDAspJDlXCKFDoAHF+w6a3QtZBSyzC8tYuxyIhRByD1CiHTYFu0fEEJuDusT8Y9uEqlnE5FiUZFyPpEbcwShlyL+Na+JhM+H6blFchKbSHhhn/YBob5Y2b/JwMLHU8e+qEj7RpFsLJKtVuS1i3FuwhciPOal3hL49fMe8/nMKfLjgiIkn1UE4cyLuJCHoE2aZ3kuOobj9rtDe+6USMhXEzn9i0hmRaScWYTML8LQTSKmCTBn3SISNsc+bVr0uUUQ/T+LeFYjwvSg3PfcvO8r3MVMmvuD3XEn2Htk1yIjbGvBOZnA3neCxHyDRrU/ncysNZhwkKsJCAmTRswM94ZP2+VD+Mn3Uy4jMn7HEarCsp5PRBZM+TBdzg9h+3Rn6nJJvCYSyHgNu3uIT3wgGqZzRPz2+0wihJel6AcortgPw0efHg1hRn1KOFgf15ShHonumauBqdRXJmwmkT9wXpbI3CalP58uAsQcQ9oWaObvTdCH8imRiWo/8mA9ncjhUKNqJpH3TZZn+51fD3BZP6wP+PTOn6GLmNm2keNQRD/SYrnON+VfaG+x7OvC1NKDUkTUQhQz1ZHP58vlcu95cLyatocuR5mPi5ZdeMB5cf8wOnHgfhL9Vh/O5z/nEflP3En5ZFRQ1zu4yi8A3r5XNoWOnJFexFQHCW+lcXs41gL3nYZbxBYAl0y33x1Lgfr+gJhBDsj9WlaE6GYpApEaDyIIwxahtB/OcrNdNh4RkJU9iawKL4L8SJHbu6eTyGLELKLAiqBQhJmfSgB420W8ItEULcCVXaLu2yHoHeKUCMBB43Ej/e4gu/CDgN6YH51It44ajYib6iaRBYlJpGVOZFhFAStifs2JkiSyCnzRohEUrWgqeyQiftDYf2WaRJbFT6xGq/FJZEGSyNpIImvDNr90n0RWw1SHCHM5KBoRO2ik+ySyFpLI2vAiSg0TK5gim0banY5ulyN2349s4IncFY00e7PbVlpaRBXMn25rm9qgHey/FldV1R4B5kjTbOoAKRhjEEW2Z82Hgcvl4eFy/uvz0nElEgng/A3wlq/2C0/f7QAAAABJRU5ErkJggg=='}
          alt="Plus" />
      </div>
    </div>
  )
}

export default ProductCard