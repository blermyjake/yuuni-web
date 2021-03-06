import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';
import WhiteBox from '../components/WhiteBox';
import questionSvg from '../icons/question.svg';
import { rhythm } from '../utils/typography';

const SkillSection = props => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: 'auto',
    },
    whiteBox: {
      padding: rhythm(1.5),
    },
    containerKihon: {
      position:
        'relative' /* 親要素をrelativeにしないと子(?マーク)がはみ出すため */,
    },
    helpButton: {
      color: '#999999',
      position: 'absolute',
      right: '5px',
      top: '20px',
      cursor: 'pointer',
      ' img': { width: '1.2rem' },
    },
    sonotaListItem: {
      marginBottom: rhythm(1),
    },
    sonotaTitle: {
      color: '#262626',
      fontWeight: 'bold',
    },
    sonotaContent: {
      marginTop: rhythm(1 / 4),
    },
    caret: {
      marginRight: rhythm(1 / 4),
      opacity: 0.8,
    },
    link: {
      color: '#262626',
      cursor: 'pointer',
      textDecorationLine: 'underline',
    },
  };

  const skills = {
    基本: {
      Javascript: 5,
      'HTML5/CSS3': 5,
      'Node.js': 4,
      Jest: 4,
      Typescript: 4,
      GraphQL: 3,
      Python: 3,
      RxJS: 3,
    },
    フロントエンド: {
      'React/Redux': 5,
      'CSS-in-JS': 4,
      Enzyme: 4,
      'Material-UI': 4,
      webpack: 4,
      Angular: 3,
      'redux-observable': 3,
      Workbox: 3,
    },
    バックエンド: {
      'TCP/IP': 5,
      Docker: 4,
      RDBMS: 4,
      Firebase: 3,
      Kubernetes: 3,
      Swagger: 3,
      Serverless: 3,
    },
    その他: [
      {
        title: 'スキルテスト',
        content: (
          <div>
            Paizaコーディング{' '}
            <a
              href="https://paiza.jp/guide/career#rank"
              css={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Aランク<IconExtLink />
            </a>
          </div>
        ),
      },
      {
        title: 'スキル習得方法',
        content: (
          <div
            onClick={() => props.setCurrentModal('UDEMY')}
            onKeyDown={e => {
              if (e.keyCode === 13) props.setCurrentModal('UDEMY');
            }}
            role="button"
            tabIndex={0}
          >
            Udemy（<span css={styles.link}>習得済みコース一覧</span>）
          </div>
        ),
      },
      {
        title: '言語',
        content: (
          <div>
            日本語<br />英語（○読む書く聞く、×話す）
          </div>
        ),
      },
      {
        title: '好きなツール',
        content: 'VSCode、HHKB Pro2',
      },
    ],
  };

  return (
    <SectionContainer id="skill" colorNumber="2" skew>
      <SectionHeader text="スキル" colorNumber="2" />
      <div css={styles.grid}>
        <WhiteBox css={styles.whiteBox}>
          <div css={styles.containerKihon}>
            <h3>基本</h3>
            <div
              css={styles.helpButton}
              onClick={() => props.setCurrentModal('SKILL_HELP')}
              onKeyDown={e => {
                if (e.keyCode === 13) props.setCurrentModal('SKILL_HELP');
              }}
              role="button"
              tabIndex={0}
            >
              <img src={questionSvg} alt="hint button" />
            </div>
            {Object.keys(skills['基本']).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills['基本'][skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>フロントエンド</h3>
            {Object.keys(skills['フロントエンド']).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills['フロントエンド'][skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>バックエンド</h3>
            {Object.keys(skills['バックエンド']).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills['バックエンド'][skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>その他</h3>
            <ul>
              {skills['その他'].map(item => (
                <li css={styles.sonotaListItem} key={item.title}>
                  <div css={styles.sonotaTitle}>
                    <FontAwesomeIcon
                      icon="caret-square-right"
                      style={styles.caret}
                    />
                    {item.title}
                  </div>
                  <div css={styles.sonotaContent}>{item.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </WhiteBox>
      </div>
    </SectionContainer>
  );
};

SkillSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default SkillSection;
