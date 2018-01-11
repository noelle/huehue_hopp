class ReportSerializer
  def self.serialize_many(reports)
    reports.map { |report| new(report).serialize }
  end

  def initialize(report)
    @report = report
  end

  def serialize
    {
      horse_name: @report.horse_name,
      date: @report.date
    }
  end
end
