'use client';

import { Container, Row, Col } from 'react-bootstrap';
import {
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaLock,
  FaChartLine,
  FaCubes,
  FaProjectDiagram,
  FaBolt,
  FaCoins,
  FaExchangeAlt,
  FaBalanceScale,
  FaMapMarkedAlt,
  FaUsers,
  FaClipboardCheck,
  FaCogs,
  FaStream,
  FaFingerprint,
  FaRoute,
  FaLayerGroup,
  FaRegHandshake,
  FaHeartbeat,
  FaArrowRight,
} from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { ScrollFadeIn, ScrollSlideIn } from '../../components/ScrollAnimation';

const palette = {
  bg: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)',
  white: '#ffffff',
  text: '#2c3e50',
  muted: '#6c757d',
  accent: '#007bff',
  accentSoft: 'rgba(0, 123, 255, 0.05)',
  accentBorder: 'rgba(0, 123, 255, 0.2)',
  cardShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
};

const sectionStyle = (alt = false) => ({
  padding: '120px 0',
  background: alt ? palette.bg : palette.white,
});

const cardStyle = {
  padding: '2rem',
  background: palette.white,
  borderRadius: '15px',
  border: `1px solid ${palette.accentBorder}`,
  boxShadow: palette.cardShadow,
  height: '100%',
};

const pillStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.25rem 1.5rem',
  background: palette.accentSoft,
  borderRadius: '10px',
  border: `1px solid ${palette.accentBorder}`,
};

const sectionTitle = {
  fontSize: '3rem',
  fontWeight: 700,
  color: palette.text,
  marginBottom: '1rem',
};

const sectionLead = {
  fontSize: '1.25rem',
  color: palette.muted,
};

const bodyText = {
  fontSize: '1.15rem',
  lineHeight: 1.8,
  color: palette.muted,
  marginBottom: '1.5rem',
};

function FactCard({ value, label }) {
  return (
    <div
      style={{
        padding: '1.5rem',
        background: palette.white,
        borderRadius: '15px',
        border: `1px solid ${palette.accentBorder}`,
        textAlign: 'center',
        boxShadow: palette.cardShadow,
      }}
    >
      <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: palette.accent, marginBottom: '0.5rem' }}>
        {value}
      </div>
      <div style={{ fontSize: '0.9rem', color: palette.muted }}>{label}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, body }) {
  return (
    <div style={cardStyle}>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: palette.accent,
          color: palette.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          marginBottom: '1.25rem',
        }}
      >
        <Icon />
      </div>
      <h4 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: palette.text }}>{title}</h4>
      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: palette.muted, margin: 0 }}>{body}</p>
    </div>
  );
}

export default function LearnMore() {
  return (
    <PageTransition>
      <Navbar />
      <div className="learn-more-page" style={{ background: palette.bg, color: palette.text }}>
        {/* HERO / SYSTEM OVERVIEW */}
        <section style={sectionStyle(false)}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center text-center mb-5">
                <Col lg={9}>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: palette.accent,
                      fontWeight: 600,
                      marginBottom: '1.5rem',
                    }}
                  >
                    Production System Blueprint
                  </p>
                  <h1
                    style={{
                      fontSize: '3.5rem',
                      fontWeight: 700,
                      color: palette.text,
                      marginBottom: '1.5rem',
                      lineHeight: 1.15,
                    }}
                  >
                    Saint Daniels Healthcare Rewards
                  </h1>
                  <p style={{ fontSize: '1.35rem', color: palette.muted, lineHeight: 1.7 }}>
                    A production healthcare equity platform that rewards verified health behavior with
                    deterministic, geographically weighted incentives — settled through compliant financial
                    rails and anchored for audit on a public blockchain.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={3} md={6}>
                <ScrollFadeIn delay={0.05}>
                  <FactCard value="Hetzner" label="Bare-metal compute & system of record" />
                </ScrollFadeIn>
              </Col>
              <Col lg={3} md={6}>
                <ScrollFadeIn delay={0.1}>
                  <FactCard value="Snowflake" label="Population-scale analytics mirror" />
                </ScrollFadeIn>
              </Col>
              <Col lg={3} md={6}>
                <ScrollFadeIn delay={0.15}>
                  <FactCard value="Circle" label="USDC payouts & merchant settlement" />
                </ScrollFadeIn>
              </Col>
              <Col lg={3} md={6}>
                <ScrollFadeIn delay={0.2}>
                  <FactCard value="Polygon" label="Tamper-evident audit anchoring" />
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ARCHITECTURAL INVARIANT */}
        <section style={sectionStyle(true)}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <h2 style={sectionTitle}>One System of Record</h2>
                  <p style={bodyText}>
                    The architectural invariant that governs every other decision: the PostgreSQL reward
                    ledger running on Hetzner is the single system of record for every action verified,
                    every point credited, every pool allocation, and every Participation Impact Score
                    assignment.
                  </p>
                  <p style={bodyText}>
                    Snowflake is a downstream analytics mirror. Polygon holds cryptographic commitments
                    but never authoritative balance state. Circle executes payouts authorized by the
                    off-chain ledger but never authorizes payouts independently. No component outside
                    PostgreSQL can originate reward state, and no component inside PostgreSQL depends on
                    an external system being available to remain consistent.
                  </p>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={pillStyle}>
                      <FaDatabase style={{ fontSize: '1.5rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        PostgreSQL is authoritative — every other system is downstream
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaShieldAlt style={{ fontSize: '1.5rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        No external dependency can corrupt internal consistency
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaProjectDiagram style={{ fontSize: '1.5rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Every derived system can be rebuilt from the event log
                      </span>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* SIX-LAYER ARCHITECTURE */}
        <section style={sectionStyle(false)}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={9} className="text-center">
                  <h2 style={sectionTitle}>Six Horizontal Layers</h2>
                  <p style={sectionLead}>
                    The system is organized as a modular monolith during MVP with defined extraction
                    points for later distribution.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.05}>
                  <FeatureCard
                    icon={FaUsers}
                    title="Client Layer"
                    body="Native iOS in Swift/SwiftUI as the primary surface, Android in Kotlin with Jetpack Compose, and a Next-generation web companion for account management, redemption flows, and the internal admin console."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.1}>
                  <FeatureCard
                    icon={FaRoute}
                    title="Edge Layer"
                    body="Caddy reverse proxy handles TLS 1.3 termination, HSTS enforcement, and request routing. Cloudflare sits in front at scale for DDoS protection and geographic distribution."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.15}>
                  <FeatureCard
                    icon={FaCogs}
                    title="Application Layer"
                    body="A thin HTTP boundary that delegates immediately to the domain service layer — UserService, VerificationService, RewardEngineService, RewardLedgerService, PoolAllocationService, AnchoringService, and SettlementService."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.2}>
                  <FeatureCard
                    icon={FaDatabase}
                    title="Data Layer"
                    body="PostgreSQL 16 as the single system of record, Redis 7 for sessions, rate limiters, and BullMQ queues, and S3-compatible object storage for binary artifacts and archived audit logs."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.25}>
                  <FeatureCard
                    icon={FaChartLine}
                    title="Intelligence Layer"
                    body="Snowflake with dedicated virtual warehouses for ETL ingestion, BI querying, and ML workloads — supporting equity modeling and cohort research without touching the operational hot path."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4} md={6}>
                <ScrollFadeIn delay={0.3}>
                  <FeatureCard
                    icon={FaShieldAlt}
                    title="Integrity Layer"
                    body="Polygon anchoring contracts and the Circle settlement API — both accessed outbound-only by their respective services and isolated from inbound traffic."
                  />
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* HCV ENGINE */}
        <section style={sectionStyle(true)}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={9} className="text-center">
                  <p
                    style={{
                      fontSize: '0.85rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: palette.accent,
                      fontWeight: 600,
                      marginBottom: '1rem',
                    }}
                  >
                    The Signature Innovation
                  </p>
                  <h2 style={sectionTitle}>Health Contribution Value Engine</h2>
                  <p style={sectionLead}>
                    The HCV engine computes a deterministic reward multiplier from regional population
                    density, healthcare access, and outcome scarcity — amplifying rewards for users
                    whose participation produces greater marginal public health impact.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4 mb-5">
              <Col lg={4}>
                <ScrollFadeIn delay={0.05}>
                  <FeatureCard
                    icon={FaMapMarkedAlt}
                    title="Population Density (PD)"
                    body="Persons per square kilometer at the Census tract level, sourced from the U.S. Census Bureau American Community Survey. Normalized inversely with logarithmic compression."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.1}>
                  <FeatureCard
                    icon={FaHeartbeat}
                    title="Healthcare Access (HAI)"
                    body="A composite of primary-care providers per 10k residents, mean distance to qualified facilities, and preventive-care availability — sourced from HRSA AHRF and CMS provider enrollment data."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.15}>
                  <FeatureCard
                    icon={FaBalanceScale}
                    title="Outcome Scarcity (OSF)"
                    body="A composite reflecting how far regional baseline outcomes fall below benchmarks — premature mortality, preventable hospitalizations, and chronic disease prevalence per County Health Rankings."
                  />
                </ScrollFadeIn>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <h3 style={{ fontSize: '2rem', color: palette.text, marginBottom: '1.5rem' }}>
                    A Deterministic, Auditable Formula
                  </h3>
                  <p style={bodyText}>
                    Each input is normalized to the unit interval, then combined through a weighted
                    linear combination:
                  </p>
                  <div
                    style={{
                      padding: '1.5rem',
                      background: palette.white,
                      border: `1px solid ${palette.accentBorder}`,
                      borderRadius: '10px',
                      marginBottom: '1.5rem',
                      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                      fontSize: '1.05rem',
                      color: palette.text,
                    }}
                  >
                    S = w<sub>PD</sub>·PD<sub>n</sub> + w<sub>HAI</sub>·HAI<sub>n</sub> +
                    w<sub>OSF</sub>·OSF<sub>n</sub>
                    <br />
                    RM = RM<sub>min</sub> + HCV · (RM<sub>max</sub> − RM<sub>min</sub>)
                  </div>
                  <p style={bodyText}>
                    Default weights are <strong>w<sub>PD</sub>=0.3</strong>,{' '}
                    <strong>w<sub>HAI</sub>=0.4</strong>, <strong>w<sub>OSF</sub>=0.3</strong>,
                    prioritizing healthcare access as the most direct indicator of systemic underservice.
                    The multiplier is bounded between RM<sub>min</sub>=1.0 (no user is ever penalized
                    relative to the base schedule) and RM<sub>max</sub>=2.5 (preserving economic
                    sustainability).
                  </p>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={pillStyle}>
                      <FaClipboardCheck style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Weights are versioned; modification produces a new algorithm version
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaFingerprint style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Operates on regional characteristics — never on race, gender, or income
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaShieldAlt style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Anti-exploitation: verified addresses, longitudinal geolocation, audited changes
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaArrowRight style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Recomputed monthly and on every region or algorithm update
                      </span>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* REWARD LEDGER */}
        <section style={sectionStyle(false)}>
          <Container>
            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <h2 style={sectionTitle}>Double-Entry Reward Ledger</h2>
                  <p style={bodyText}>
                    Every point movement is recorded as a paired debit and credit with database-enforced
                    invariants. Every transaction sums to zero. No entry is ever updated or deleted —
                    corrections are implemented as compensating transactions, preserving complete history.
                  </p>
                  <p style={bodyText}>
                    Application database users hold insert-only privileges on ledger tables. Update and
                    delete privileges exist only for break-glass administrative accounts whose use
                    generates audit alerts. Balances are never stored as mutable state — they are
                    computed by aggregation.
                  </p>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={pillStyle}>
                      <FaCoins style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Reward value can never be created or destroyed by implementation error
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaExchangeAlt style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Pool allocations are deterministic — never resolved by market mechanisms
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaLock style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Five layers of anti-fraud: cooldowns, caps, fingerprinting, evidence, statistics
                      </span>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <ScrollFadeIn delay={0.05}>
                  <FeatureCard
                    icon={FaClipboardCheck}
                    title="Verified, Then Computed"
                    body="Submissions pass syntactic, semantic, and evidentiary validation. Self-attested actions carry lower base rewards than externally verified actions — creating a steep gradient toward HealthKit, Health Connect, pharmacy claims, and provider feeds."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.1}>
                  <FeatureCard
                    icon={FaCubes}
                    title="Pool-Funded Multipliers"
                    body="Reward pools define a scope predicate, a funded amount, an allocation algorithm, and a time window. Funding sources include platform reserves, institutional grants, public-health partnerships, and content-neutral sponsor contributions."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.15}>
                  <FeatureCard
                    icon={FaStream}
                    title="Atomic Transactions"
                    body="Each completion writes the action row, paired ledger entries, streak updates, milestone awards, and a domain event in a single PostgreSQL transaction. Any failure rolls back the entire change — no partial state ever escapes."
                  />
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* INTEGRITY / POLYGON */}
        <section style={sectionStyle(true)}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={9} className="text-center">
                  <h2 style={sectionTitle}>Cryptographic Integrity, Anchored Publicly</h2>
                  <p style={sectionLead}>
                    The integrity layer produces externally verifiable cryptographic evidence of
                    off-chain ledger state — without compromising privacy or operational control.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={4}>
                <ScrollFadeIn delay={0.05}>
                  <FeatureCard
                    icon={FaFingerprint}
                    title="Canonical Hashing"
                    body="Every domain event is serialized into a strict canonical form, hashed with SHA-256 (FIPS 180-4), and chained to its predecessor in both per-user and global chains. Retroactive insertion or modification is structurally detectable."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.1}>
                  <FeatureCard
                    icon={FaProjectDiagram}
                    title="Merkle Tree Anchoring"
                    body="On a scheduled cadence — hourly during peak, daily otherwise — events are batched into a Merkle tree and the root is published to Polygon by the SaintDanielsAnchors contract. No tokens. No trading. Just commitment storage."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.15}>
                  <FeatureCard
                    icon={FaRegHandshake}
                    title="Public Verifiability"
                    body="Any external party can request a Merkle proof for any event, recompute the root locally, and compare it against the on-chain commitment — proving inclusion under standard cryptographic assumptions."
                  />
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* SETTLEMENT */}
        <section style={sectionStyle(false)}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <h2 style={sectionTitle}>Compliant USDC Settlement</h2>
                  <p style={bodyText}>
                    Circle provides the rails for user redemptions and merchant payouts. Every Circle
                    interaction is outbound-only and subordinate to the off-chain ledger as the
                    authorization source.
                  </p>
                  <p style={bodyText}>
                    Conversion happens only after KYC — government identity verification, biometric
                    liveness, address verification, and sanctions/PEP screening through an integrated
                    provider under a Business Associate Agreement. Idempotency keys derived from the
                    settlement request ID guarantee that retries can never produce duplicate payouts.
                  </p>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={pillStyle}>
                      <FaCoins style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Stable conversion rate — no market or speculative mechanism
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaShieldAlt style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Daily reconciliation across the full settlement surface
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaRegHandshake style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Weekly merchant payouts with full per-cent reconciliation reports
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaBalanceScale style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        MSB registration, state money-transmitter compliance, full BSA program
                      </span>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* EVENTS */}
        <section style={sectionStyle(true)}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={9} className="text-center">
                  <h2 style={sectionTitle}>Event-Driven by Design</h2>
                  <p style={sectionLead}>
                    The transactional outbox pattern guarantees every state change emits a durable event
                    atomically — no event can ever be lost to a downstream failure.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={4}>
                <ScrollFadeIn delay={0.05}>
                  <FeatureCard
                    icon={FaLayerGroup}
                    title="Durable Event Log"
                    body="Every service method that produces a state change inserts a row into domain_events within the same transaction. The log is partitioned by month, online for ninety days, archived indefinitely to object storage."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.1}>
                  <FeatureCard
                    icon={FaBolt}
                    title="BullMQ Workers"
                    body="Workers consume events with SELECT FOR UPDATE SKIP LOCKED for concurrent safety. Notifications, streaks, milestones, anchoring, settlement, and Snowflake replication all run as independent worker pools."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.15}>
                  <FeatureCard
                    icon={FaArrowRight}
                    title="Replayable, Always"
                    body="Any derived system — a Snowflake table, a notification history, even an entire Polygon anchor — can be rebuilt by iterating the event log with fresh consumer logic. No primary database restore required."
                  />
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* COMPLIANCE */}
        <section style={sectionStyle(false)}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="left">
                  <h2 style={sectionTitle}>HIPAA, Finance, and Fairness</h2>
                  <p style={bodyText}>
                    Saint Daniels operates at the intersection of healthcare privacy law, financial
                    regulation, and state insurance law — and the security posture integrates all three
                    regimes simultaneously.
                  </p>
                  <p style={bodyText}>
                    LUKS at rest, pgcrypto column-level encryption for PHI with keys held in a separate
                    key management service, TLS 1.3 in transit, mutual TLS within the server boundary,
                    and immutable cryptographically chained audit logs replicated nightly to object
                    storage with seven-year retention.
                  </p>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={pillStyle}>
                      <FaLock style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        BAAs with every PHI-processing vendor — non-signers are architecturally isolated
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaShieldAlt style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Versioned consent, minutes-fast revocation, full PHI deletion on request
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaBalanceScale style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        Public fairness log; algorithm and weights published; annual external audit
                      </span>
                    </div>
                    <div style={pillStyle}>
                      <FaClipboardCheck style={{ fontSize: '1.4rem', color: palette.accent }} />
                      <span style={{ color: palette.muted, fontSize: '1.05rem' }}>
                        No token, no tradable asset — Polygon is transparency, not a financial instrument
                      </span>
                    </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* SCALING */}
        <section style={sectionStyle(true)}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={9} className="text-center">
                  <h2 style={sectionTitle}>Scaled Only by Measured Demand</h2>
                  <p style={sectionLead}>
                    Every infrastructure transition is justified by a specific measured condition. No
                    transition is performed speculatively.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              <Col lg={3} md={6}>
                <ScrollFadeIn delay={0.05}>
                  <FeatureCard
                    icon={FaServer}
                    title="MVP — 1k Users"
                    body="A single Hetzner AX52 running the full Docker Compose stack. Closed beta over six months. Polygon anchored daily, Snowflake feeding initial dashboards, Circle settlement built but gated behind counsel review."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={3} md={6}>
                <ScrollFadeIn delay={0.1}>
                  <FeatureCard
                    icon={FaChartLine}
                    title="Growth — 10k"
                    body="PostgreSQL extracts to a dedicated AX102 host with a read replica. Circle settlement opens to elevated-KYC users. The first institutional sponsored pools go live. Annual fairness audit published."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={3} md={6}>
                <ScrollFadeIn delay={0.15}>
                  <FeatureCard
                    icon={FaCubes}
                    title="Scale — 100k"
                    body="Load-balanced application hosts, dedicated Redis and worker hosts, RewardLedgerService and PoolAllocationService extracted to independent services. Multi-state expansion begins."
                  />
                </ScrollFadeIn>
              </Col>
              <Col lg={3} md={6}>
                <ScrollFadeIn delay={0.2}>
                  <FeatureCard
                    icon={FaProjectDiagram}
                    title="Global — 1M"
                    body="AnchoringService and SettlementService extracted, GPU host introduced for ML verification, multi-region PostgreSQL with logical replication, currency-appropriate settlement rails where regulation permits."
                  />
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* CLOSING */}
        <section style={sectionStyle(false)}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center text-center">
                <Col lg={9}>
                  <h2 style={sectionTitle}>Three Commitments, Continuously Enforced</h2>
                  <p style={{ ...bodyText, fontSize: '1.25rem' }}>
                    Fairness is <strong>computed</strong>, not marketed. Integrity is{' '}
                    <strong>verifiable</strong>, not asserted. Scale is <strong>earned</strong>, not
                    anticipated.
                  </p>
                  <p style={bodyText}>
                    Every reward traces to a specific verified behavior, weighted by a specific
                    published fairness formula. Every commitment is anchored to a public ledger anyone
                    can verify. Every infrastructure decision is governed by measured demand. The
                    platform that results is one in which users in underserved and low-density regions
                    receive amplified reward weighting — because their participation produces amplified
                    public health value.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>
          </Container>
        </section>
      </div>
      <Footer />
    </PageTransition>
  );
}
