<template>
    <div class="finance__cart">
        <div class="title">
            <span>Магазин мебели</span>
        </div>
        <div class="block">
            <div class="num"><span>01</span></div>
            <div class="name" data-label="Задача"><strong>Разработка сайта</strong></div>
            <div class="price" data-label="Бюджет"><strong>250,000₽</strong></div>
            <div data-label="Договор">
                <div class="doc">
                    <div class="img"><img src="../../assets/img/icons/doc.svg" alt="doc"></div>
                    <strong>Договор.pdf</strong>
                    <span>34 MB</span>
                </div>
            </div>
            <div data-label="Акт">
                <div class="doc">
                    <div class="img"><img src="../../assets/img/icons/doc.svg" alt="doc"></div>
                    <strong>Договор.pdf</strong>
                    <span>34 MB</span>
                </div>
            </div>
            <div data-label="Период">
                <div class="month">
                    <span>Акт: Январь</span>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="num"><span>01</span></div>
            <div class="name" data-label="Задача"><strong>Разработка сайта</strong></div>
            <div class="price" data-label="Бюджет"><strong>250,000₽</strong></div>
            <div data-label="Договор">
                <div class="doc">
                    <div class="img"><img src="../../assets/img/icons/doc.svg" alt="doc"></div>
                    <strong>Договор.pdf</strong>
                    <span>34 MB</span>
                </div>
            </div>
            <div data-label="Акт">
                <div class="doc">
                    <div class="img"><img src="../../assets/img/icons/doc.svg" alt="doc"></div>
                    <strong>Договор.pdf</strong>
                    <span>34 MB</span>
                </div>
            </div>
            <div data-label="Период">
                <div class="month">
                    <span>Акт: Январь</span>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="num"><span>01</span></div>
            <div class="name" data-label="Задача"><strong>Разработка сайта</strong></div>
            <div class="price" data-label="Бюджет"><strong>250,000₽</strong></div>
            <div data-label="Договор">
                <div class="doc">
                    <div class="img"><img src="../../assets/img/icons/doc.svg" alt="doc"></div>
                    <strong>Договор.pdf</strong>
                    <span>34 MB</span>
                </div>
            </div>
            <div data-label="Акт">
                <div class="doc">
                    <div class="img"><img src="../../assets/img/icons/doc.svg" alt="doc"></div>
                    <strong>Договор.pdf</strong>
                    <span>34 MB</span>
                </div>
            </div>
            <div data-label="Период">
                <div class="month">
                    <span>Акт: Январь</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.finance__cart {
    background: var(--background-background-primary);
    max-width: 1000px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--colors-secondary-border-color);
}

.title {
    border-bottom: 1px solid var(--colors-secondary-border-color);
    padding: 20px 24px;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 115%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.block {
    padding: 20px 24px;
    display: grid;
    grid-template-columns: 1fr 4fr 4fr 4fr 4fr 2fr;
    align-items: center;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);

    strong {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        line-height: 143%;
        letter-spacing: -0.02em;
        color: var(--text-primary);
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--colors-secondary-border-color);
    }
}


.name {}

.price {
    justify-self: center;

    strong {
        font-size: 16px;
    }
}

.doc {
    display: flex;
    align-items: center;
    gap: 12px;
}

.img {
    border-radius: 4px;
    width: 32px;
    height: 32px;
    background: var(--background-background-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
}

.month {
    justify-self: center;
    display: flex;
    align-items: center;
    gap: 8px;

    &::after {
        content: url('../../assets/img/icons/arrow-down.svg');
    }
}

@media(max-width:1350px) {
    .doc {
        span {
            display: none;
        }
    }

    .block {
        font-size: 12px;
        grid-template-columns: 0.5fr 2fr 1fr 2fr 2fr 2fr;
        gap: 10px;

        strong {
            font-size: 12px;
        }
    }

}

@media(max-width:800px) {

    .title {
        border: 1px solid var(--colors-secondary-border-color);
        border-bottom: 0;
        border-radius: 8px 8px 0 0;
    }



    .block {
        padding: 0;
        grid-template-columns: 1fr;
        gap: 0;

        &:not(:last-child) {
            border: 0;
            padding-bottom: 16px;
        }
    }

    .price {
        justify-self: auto;
    }

    .month {
        justify-self: auto;
    }

    .title {
        background: var(--background-background-primary);
    }

    .block>div {
        background: var(--background-background-primary);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 0 24px;
        border-bottom: 1px solid var(--colors-secondary-border-color);
        border-right: 1px solid var(--colors-secondary-border-color);
        border-left: 1px solid var(--colors-secondary-border-color);


        &:nth-child(2) {
            border-top: 1px solid var(--colors-secondary-border-color);
        }

        &::before {
            content: attr(data-label);
        }

        &.num {
            display: none;
        }
    }

    .finance__cart {
        border: 0;
        background: none;
    }


}
</style>