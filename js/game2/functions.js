export function checkPiece(piece1, piece2, position) {
    let isCorrect = false;
    switch (piece1) {
        case 'img0':
            switch (position) {
                case 'top':
                    if (piece2 == 'img0' || piece2 == 'img1' || piece2 == 'img2') {
                        isCorrect = true;
                    }
                    break;
                case 'left':
                    break;
                case 'bottom':
                    if (piece2 == 'img0' || piece2 == 'img4' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;
                case 'right':
                    break;

                default:
                    break;
            }
            break;

        case 'img1':
            switch (position) {
                case 'top':
                case 'left':
                    break;
                case 'bottom':
                    if (piece2 == 'img0' || piece2 == 'img4' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;
                case right:
                    if (piece2 == 'img2' || piece2 == 'img3' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;

                default:
                    break;
            }
            break;

        case 'img2':
            switch (position) {
                case 'top':
                    break;
                case 'left':
                    if (piece2 == 'img1' || piece2 == 'img3' || piece2 == 'img4') {
                        isCorrect = true;
                    }
                    break;
                case 'bottom':
                    if (piece2 == 'img0' || piece2 == 'img4' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;
                case 'right':
                    break;

                default:
                    break;
            }
            break;

        case 'img3':
            switch (position) {
                case 'top':
                    break;
                case 'left':
                    if (piece2 == 'img1' || piece2 == 'img3' || piece2 == 'img4') {
                        isCorrect = true;
                    }
                    break;
                case 'bottom':
                    break;
                case 'right':
                    if (piece2 == 'img2' || piece2 == 'img3' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;

                default:
                    break;
            }
            break;

        case 'img4':
            switch (position) {
                case 'top':
                    if (piece2 == 'img0' || piece2 == 'img1' || piece2 == 'img2') {
                        isCorrect = true;
                    }
                    break;
                case 'left':
                case 'bottom':
                    break;
                case 'right':
                    if (piece2 == 'img2' || piece2 == 'img3' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;

                default:
                    break;
            }
            break;

        case 'img5':
            switch (position) {
                case 'top':
                    if (piece2 == 'img0' || piece2 == 'img1' || piece2 == 'img2') {
                        isCorrect = true;
                    }
                    break;
                case 'left':
                    if (piece2 == 'img1' || piece2 == 'img3' || piece2 == 'img4') {
                        isCorrect = true;
                    }
                    break;
                case 'bottom':
                case 'right':
                    break;

                default:
                    break;
            }
            break;

        default:
            break;
    }
    return isCorrect;
}

export function getPositions(track) {
    let positionArr = [];
    for (let j = 0; j < track.length; j++) {
        let elementId = track[j].id;
        let position = elementId.split('drop');
        positionArr.push(position);
    }
    console.log(positionArr);
    return positionArr;
}

export function comparePieces(array) {
    let positions = [];
    for (var i = 0; i < array.length; i++) {
        if (i + 1 < array.length) {
            if (parseInt(array[i][0]) + 1 === parseInt(array[i + 1][0]) && array[i][1] === array[i + 1][1]) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
                positions.push('bottom');
            }
            else if (parseInt(array[i][0]) - 1 === parseInt(array[i + 1][0]) && array[i][1] === array[i + 1][1]) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
                positions.push('left');
            }
            else if (parseInt(array[i + 1][1]) + 1 === parseInt(array[i + 1][1]) && array[i][0] === array[i + 1][0]) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
                positions.push('top');
            }
            else if (parseInt(array[i + 1][1]) - 1 === parseInt(array[i][1]) && array[i][0] === array[i + 1][0]) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
                positions.push('right');
            }
        }
    }
    return positions;
}